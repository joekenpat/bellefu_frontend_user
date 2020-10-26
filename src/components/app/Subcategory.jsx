import React from 'react';
import { Container } from 'react-bootstrap';
import BottomNav from '../navigations/BottomNav';
import HeaderNav from '../navigations/HeaderNav';
import Axios from "axios";
import { useState } from 'react';
import Preloader from '../user/Preloader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Subcategory = (props) => {
    const [subcategories, setSubcategories] = useState([])
    const [loading, setLoading] = useState(true)

    const loadSubCategory = () => {
		Axios
			.get(`https://dev.bellefu.com/api/subcategory/listfor/${props.match.params.category_id}`, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
                setLoading(false)
				setSubcategories(res.data.subcategories.data);
			})
			.catch((error) => {
				console.log(error);
			});
    };
    
    useEffect(() => {
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
                        <div style={{borderBottom: '1px solid gray'}} className="py-2" key={index}>
                            <Link to={`/product_list?subcategory=${data.slug}&category=${props.match.params.category_id}&country=${props.userCountry.country_slug}`}>
                                <div className="pl-4">
                                    <div style={{fontWeight: 'bold', color: 'black'}}>{data.name}</div>
                                    <div className="mt-1" style={{color: 'gray', fontSize: '12px'}}>{data.products_count} ads</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                )
            }
            <BottomNav />
        </div>
    )
}

export default Subcategory