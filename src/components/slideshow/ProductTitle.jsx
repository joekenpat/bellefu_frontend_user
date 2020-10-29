import React, { useEffect, useState } from 'react';
import { Badge, Card } from "react-bootstrap";

import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle
} from "react-icons/io";
const {Translate} = require('@google-cloud/translate').v2;


const ProductTitle = (props) => {
    const [productTitel, setProductTitel] = useState(props);
    const [text, setText] = useState([
        props.title,
        props.plan
    ])
    const [originalText, setOriginalText] = useState([
        props.title,
        props.plan
    ])
	useEffect(() => {
        setProductTitel(props);
        setText([
            props.title,
            props.plan
        ])
        setOriginalText([
            props.title,
            props.plan
        ])
    }, [props]);
    
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
    }, [props.id, props])
	return (
		<div>
			{/* ===FOR DESKTOP VIEW=== */}
			<div
				className="d-none d-lg-block  d-md-none"
				style={{ marginBottom: "15px" }}>
				<span
					className="mb-5"
					style={{
						fontSize: "15px"
					}}>
					<b>{text[0]}</b>
				</span>
				<Badge
                            pill
                                variant={productTitel.plan === 'urgent' ? 'danger' : productTitel.plan === 'highlighted' ? 'success' : 'warning'}
                                className={`${
                                    productTitel.plan === "free"
                                        ? "d-none"
                                        : "d-block"
                                }`}>
                                {text[1]}
                            </Badge>
			</div>

			{/* ===FOR MOBILE VIEW=== */}
			<div
				className=" d-lg-none  d-xs-block d-sm-block d-md-block "
				style={{ marginBottom: "15px" }}>
				<span
					className="mb-5"
					style={{
						fontSize: "15px"
					}}>
					<b>{productTitel.title}</b>
				</span>
				<Badge
                            pill
                                variant={productTitel.plan === 'urgent' ? 'danger' : productTitel.plan === 'highlighted' ? 'success' : 'warning'}
                                className={`${
                                    productTitel.plan === "free"
                                        ? "d-none"
                                        : "d-block"
                                }`}>
                                {text[1]}
                            </Badge>
			</div>
		</div>
	);
}

export default ProductTitle