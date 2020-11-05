import React from 'react';
import { Container } from 'react-bootstrap';
import BottomNav from '../navigations/BottomNav';
import HeaderNav from '../navigations/HeaderNav';
import Axios from "axios";
import { useState } from 'react';
import Preloader from '../user/Preloader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubcategoryItem from './SubcategoriesItem';
import Cookie from 'js-cookie'

const Subcategory = (props) => {
    const [subcategories, setSubcategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState('')
    const [language, setLanguage] = useState(Cookie.get('language' || 'en'))


    const loadSubCategory = () => {
		Axios
			.get(`https://bellefu.com/api/subcategory/listfor/${props.match.params.category_id}`, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
                setLoading(false)
				setSubcategories(res.data.subcategories);
			})
			.catch((error) => {
				console.log(error);
			});
    };

    const load = async () => {
		await Axios.get("https://bellefu.com/api/config/api_key/google_translate")
		.then((res) => {
			setId(res.data.key)
		})
	}
    
    useEffect(() => {
        load()
        loadSubCategory()
    }, [])
    return (
        <div>
            <HeaderNav />
                {loading ? (
                    <div style={{height: '90vh'}}>
                        <Preloader />
                    </div>
                )  : (

                <div style={{marginTop: '75px'}}>
                    {subcategories.map((data, index) => (
                        <SubcategoryItem id={id} {...props} language={language} data={data} key={data.slug}/>
                    ))}
                </div>
                )
            }
            <BottomNav />
        </div>
    )
}

export default Subcategory