import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Card,
	Col,
	Row,
	OverlayTrigger,
	Badge,
	Tooltip,
	Accordion,
	Button
} from "react-bootstrap";
import pic from "../images/pic.jpg";
import { FaCommentDots, FaMobileAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { BsArrowLeftRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Price from "./Price";
import Fav from "./Fav";


const MobileAds = (props) => {
return (
    <div style={{backgroundColor: 'white'}} className="d-flex d-md-none flex-column">
        <div style={{borderBottom: '1px solid gray'}}>
            
        <Row>
            <Col xs={5}>
                <Link to={{
                        pathname: `/product_detail/${props.data.slug}`,
                        state: props.data.slug
                    }}
                    style={{
                        color: "inherit",
                        textDecoration: "inherit"
                    }}>
                    <img className="image" src={`https://dev.bellefu.com/images/products/${props.data.slug}/${props.data.images[0]}`} />
                </Link>
            </Col>
            <Col xs={7}>
                <div className="p-2">
                    <Link to={{
                        pathname: `/product_detail/${props.data.slug}`,
                        state: props.data.slug
                    }}
                    style={{
                        color: "inherit",
                        textDecoration: "inherit"
                    }}>
                        <div style={{fontWeight: 'bold'}}>{props.data.title.substring(0, 20)}</div>
                    </Link>
                        <div className="mt-1">
                        <Price styles={styles} data={props.data} {...props} convertTooltip={props.convertTooltip}/>
                        </div>
                    <div className="mt-1">
                        <Fav {...props} user={props.user} data={props.data} />
                    </div>
                    <div className="mt-1">
                    <Link to={{
                    pathname: `/product_detail/${props.data.slug}`,
                    state: props.data.slug
                }}
                style={{
                    color: "inherit",
                    textDecoration: "inherit"
                }}>
                    <Badge
                                variant="danger"
                                className={`${
                                    props.data.plan === "free"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "featured"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "higlighted"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "urgent"
                                        ? "d-block"
                                        : "d-none"
                                }`}>
                                Urgent
                            </Badge>
                            <Badge
                                variant="warning"
                                className={`${
                                    props.data.plan === "free"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "urgent"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "higlighted"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "Featured"
                                        ? "d-block"
                                        : "d-none"
                                }`}>
                                Featured
                            </Badge>
                            <Badge
                                variant="success"
                                className={`${
                                    props.data.plan === "free"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "urgent"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "featured"
                                        ? "d-none"
                                        : "d-block" || props.data.plan === "Higlighted"
                                        ? "d-block"
                                        : "d-none"
                                }`}>
                                Higlighted
                            </Badge>
                    </Link>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
    <div>
        <Row>
            <Col className="py-1" xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid gray'}}>
                <div>
                    <IconContext.Provider value={{ color: "#76BA1B", size: '15px', style: {paddingBottom: '5px'}}}>
                        <FaCommentDots className="cursor" />
                    </IconContext.Provider>
                    <span className="ml-1">Chat</span>
                </div>
            </Col>
            <Col className="py-1" xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Accordion>
                    <div>
                        <Accordion.Toggle style={{color: 'black'}} className="accordion-click" as={Button} variant="link" eventKey="0">
                            <IconContext.Provider value={{ color: "#76BA1B", size: '15px', style: {paddingBottom: '5px'}}}>
                                <FaPhone className="cursor"/>
                            </IconContext.Provider>
                            <span className="ml-1">Contact</span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div >
                                <div>
                                    <a href="https://wa.me/2348130813007">
                                        <IconContext.Provider value={{ color: "#76BA1B", size: '15px', style: {textDecoration: 'none'}}}>
                                            <FaWhatsapp className="cursor"/>
                                        </IconContext.Provider>
                                        <span style={{color: 'black', textDecoration: 'none'}} className="ml-1">Whatsapp</span>
                                    </a>
                                </div>
                                <div className="mt-1">
                                <a href="tel:2348130813007">
                                    <IconContext.Provider value={{ color: "#76BA1B", size: '15px', style: {textDecoration: 'none'}}}>
                                        <FaMobileAlt className="cursor"/>
                                    </IconContext.Provider>
                                    <span style={{color: 'black', textDecoration: 'none'}} className="ml-1">Call</span>
                                </a>
                                </div>
                            </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </div>
            </Accordion>
                
            </Col>
        </Row>
    </div>
</div>
)
}

export default MobileAds

const styles = {
	image: {
		height: "150px",
		padding: "5px",
		borderRadius: "10px"
	},
	title: {
		opacity: "0.9",
		fontSize: "14px",
		width: "150px",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		marginTop: "-6px"
	},
	titleBody: {
		padding: "5px",
		paddingLeft: "10px"
	},
	price: {
		fontSize: "0.8em",
		backgroundColor: "whitesmoke",
		padding: "5px",
		color: "#ffa500"
	},
	favBtn: {
		marginBottom: "-220px",
		fontSize: "30px",
		color: "#ffa500",
		cursor: "pointer",
		padding: "2px",
		borderRadius: "50px",
		backgroundColor: "white"
	}
};