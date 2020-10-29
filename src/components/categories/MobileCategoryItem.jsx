import React, { useState, useEffect } from "react";
import { Card, Row, Image, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const {Translate} = require('@google-cloud/translate').v2;


const MobileCategoryItem = (props) => {
    const [text, setText] = useState([
		props.data.name,
    ])
    const [originalText, setOriginalText] = useState([
		props.data.name,
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
        <Col xs={4} sm={4} md={4} className=" my-1 px-1">
            <Card style={{ height: "100%" }} className="border-0 category-shadow">
                <Link
                    to={`/subcategory/${props.data.slug}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}>
                    <Card.Body className="text-center">
                        <Image
                            src={`https://dev.bellefu.com/images/categories/${props.data.image}`}
                            style={{ height: "40px" }}
                        />
                        <Card.Text style={{ fontSize: "0.6em" }} className="mt-2">
                            {text[0]}
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default MobileCategoryItem