import React from "react";
import { Carousel, Card, Form, Container, Button } from "react-bootstrap";

import { width } from "dom-helpers";
import { left } from "@popperjs/core";
import MobileInput from "./MobileInput";




export default function MobileSlideShow(props) {
	return (
		<div style={{backgroundColor: '#76BA1B', height: '55vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
			<h3 style={{ textAlign: 'center', paddingTop: '5px', color: "white", fontSize: '20px', paddingBottom: '10px' }}>Bellefu - digital agro connect...</h3>

			<div className="px-2">
			<MobileInput id={props.id} landingpage={true} country={props.country} lga={props.lga} state={props.state} setModalShow={props.setModalShow}/>
			</div>
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
