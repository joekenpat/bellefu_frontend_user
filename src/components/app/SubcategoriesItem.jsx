import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Cookie from 'js-cookie'
const {Translate} = require('@google-cloud/translate').v2;

const SubcategoryItem = (props) => {
    const [language, setLanguage] = useState(Cookie.get('language' || 'en'))

    const [text, setText] = useState([
		props.data.name,
		'ads',
	])
	const [originalText, setOriginalText] = useState([
		props.data.name,
		'ads',
	])

    const trans = async() => {
		const translate = await new Translate({key: props.id})
		if(props.language === 'en'){
			setText(originalText)
		} else {

			translate.translate(text, props.language)
				.then((res) => {
					setText(res[0])
				
			}).catch(() => {
				setText(originalText)
				})
		}
	}
	  
	useEffect( () => {
		trans()
	}, [props.id, props.language])
 return (
    <div style={{borderBottom: '1px solid #bab8b8'}} className="py-2">
    <Link to={`/product_list?subcategory=${props.data.slug}&category=${props.match.params.category_id}&country=${props.userCountry.country_slug}`}>
        <div className="pl-4">
            <div style={{fontWeight: 'bold', color: 'black'}}>{text[0]}</div>
            <div className="mt-1" style={{color: 'gray', fontSize: '12px'}}>{props.data.products_count}{' '}{text[1]}</div>
        </div>
    </Link>
</div>
 )
}

export default SubcategoryItem