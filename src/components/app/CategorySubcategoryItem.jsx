import React, { useState } from 'react';
import { useEffect } from 'react';
import Cookie from 'js-cookie'
const {Translate} = require('@google-cloud/translate').v2;



const CategorySubcategoryItem = (props) => {
    
	const [text, setText] = useState([
		props.data.name
    ])
    const [originalText, setOriginalText] = useState([
		props.data.name
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