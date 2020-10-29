import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { ListGroup, Row, Col, Image, Accordion, Card } from "react-bootstrap";
const {Translate} = require('@google-cloud/translate').v2;
const id = 'AIzaSyAsMSfONcZLI-R5-fOMC79U94YBShHEoxo'

const MainDesktop2 = (props) => {
    const translate = new Translate({key: id})
    const [text, setText] = useState([
        props.data.name,
        'ads'
    ])
    const [originalText, setOriginalText] = useState([
        props.data.name,
        'ads'
    ])

    const getLanguage = () => {
        if(props.language === 'en'){
            setText(originalText)
        } else {

            translate.translate(text, props.language)
            .then((res) => {
               
                    setText(res[0])
                
            }).catch((e) => {
                setText(originalText)
            })
        }
    }
    
    useEffect(() => {
        getLanguage()
    }, [])
    return (
        <ListGroup.Item>
            <Link
                to={`/product_list?subcategory=${props.data.slug}`}
                style={{ color: "inherit", textDecoration: "inherit" }}>
                <p style={{ fontSize: "0.66em", textAlign: 'center' }}>{text[0]}</p>
                <div style={{ marginTop: "-38px" }}>
                    <br />
                </div>
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: "0.6em",
                        opacity: "0.5",
                        marginBottom: "-0px",
                        color: 'gray'
                    }}>
                    {props.data.products_count}{' '}{text[1]}
                </p>
            </Link>
        </ListGroup.Item>
    )
}

export default MainDesktop2