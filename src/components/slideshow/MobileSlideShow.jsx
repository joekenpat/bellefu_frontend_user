import React from "react";
import { Carousel, Card, Form, Container, Button } from "react-bootstrap";
import banner from "../images/banner.png";

import { width } from "dom-helpers";
import { left } from "@popperjs/core";
import MobileInput from "./MobileInput";




export default function MobileSlideShow(props) {
	return (
		<div>
			<Carousel
				indicators={false}
				prevIcon={
					<span aria-hidden="true" className="carousel-contrl-prev-icon " />
				}
				nextIcon={
					<span aria-hidden="true" className="carousel-contrl-next-icon " />
				}
				className="d-lg-none d-sm-block d-md-block">
				<Carousel.Item interval={1000} style={{ height: "400px" }}>
					<img
						className="d-block w-100"
						src={banner}
						alt="First slide"
						style={{ height: "400px" }}
					/>
					<Carousel.Caption  style={{ left: "10px", right: "10px" }} >
						<h3 style={{ color: "white" }}>Buy And Sale</h3>

						<MobileInput country={props.country} lga={props.lga} state={props.state} setModalShow={props.setModalShow}/>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

const selectStyles = {
	control: (styles) => ({
		...styles,
		backgroundColor: "white",
		border: "none",
		borderRadius: "none",
		height: "48px",
		fontSize: "13px",
		boxShadow: "none"
	}),
	option: (styles) => {
		return {
			...styles,
			backgroundColor: "white",
			fontSize: "15px",
			color: "black",
			postion: "relative",
			"&:hover": {
				backgroundColor: "#faebd7",
				color: "#ffa500"
			},
			cursor: "pointer"
		};
	},
	container: (styles) => {
		return {
			...styles,
			minHeight: '1px',
			textAlign: 'left',
			border: 'none',
		};
	},
};


const styles = {
	from_card: {
		height: "50px",	
	},
	input: {
		border: "none",
		borderRadius: "none",
		height: "48px",
		fontSize: "13px"
	},
	btn: {
		height: "50px",
		marginTop: "10px",
		backgroundColor: "#ffa500",
		border: "none",
		color: "white"
	}
};
