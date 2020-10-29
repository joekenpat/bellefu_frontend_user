import React, { useState } from 'react';
import { useEffect } from 'react';
import Cookie from 'js-cookie'
const {Translate} = require('@google-cloud/translate').v2;

const id = 'AIzaSyAsMSfONcZLI-R5-fOMC79U94YBShHEoxo'


const CategorySubcategoryItem = (props) => {
    
	const [text, setText] = useState([
		props.data.name
    ])
    const [originalText, setOriginalText] = useState([
		props.data.name
    ])
    const translate = new Translate({key: id})

    const getLanguage = () => {
		translate.translate(text, props.language)
		.then((res) => {
			
				setText(res[0])
			
		}).catch((e) => {
			setText(originalText)
		})
    }
    
    useEffect(() => {
        if(props.language !== 'en'){
            getLanguage()
            }
    }, [])
return (
    <option
        value={props.data.slug}
        selected={
            props.subcategory ? props.subcategory === props.data.slug ? true : false : props.category === props.data.slug ? true : false
        }>
        {text[0]}
    </option>
)
}

export default CategorySubcategoryItem