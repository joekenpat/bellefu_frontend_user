import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { ListGroup, Row, Col, Image, Accordion, Card } from "react-bootstrap";
import { IoMdArrowDropright } from "react-icons/io";
import { useEffect } from 'react';
import MainDesktop2 from './MainDesktop2';
const {Translate} = require('@google-cloud/translate').v2;
const id = 'AIzaSyAsMSfONcZLI-R5-fOMC79U94YBShHEoxo'


const MainDesktopItem = (props) => {
    const translate = new Translate({key: id})
    const [text, setText] = useState([
		props.data.name,
    ])
    const [originalText, setOriginalText] = useState([
		props.data.name,
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
        <Accordion>
        <Card className="border-0 cursor">
            <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "white" }}
                eventKey="0">
                <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}} type="button">
                    <div style={{alignSelf: 'center'}}>
                        <Image
                            height="40px"
                            width="40px"
                            src={`https://dev.bellefu.com/images/categories/${props.data.image}`}
                            roundedCircle
                        />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div className="pt-1">
                            <label className="mr-1" style={{ fontSize: "0.77em" }}>
                                {text[0]}
                            </label>
                        </div>
                        <div>
                            <IoMdArrowDropright
                                style={{ color: "#ffa500", fontSize: "20px" }}
                            />
                        </div>
                    </div>
                </div>
            </Accordion.Toggle>

            {/* =============SUB CATRGOTY=============== */}
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {props.data.subcategories.map((data) => (
                        <MainDesktop2 language={props.language} data={data} key={data.slug}/>
                    ))}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    )
}

export default MainDesktopItem