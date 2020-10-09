import React from "react";
import { Carousel, Card, Form, Container, Button } from "react-bootstrap";
import banner from "../images/banner.png";
import Select from "react-select";
import { width } from "dom-helpers";
import { left } from "@popperjs/core";



const options = [
	{ value: "Aro food", label: "Agro food" },
	{ value: "Agro job", label: "Agro job" },
	{ value: "Agro tools", label: "Agro tools" },
	{ value: "Agro training", label: "Vanilla" },
	{ value: "Agro training", label: "Agro training" },
	{ value: "Agro training", label: "Agro training" },
	{ value: "vanilla", label: "Vanilla" },
	{ value: "vanilla", label: "Vanilla" }
]
export default function MobileSlideShow() {
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

						<Form >
						<Form.Group >
							<Card style={styles.from_card} className="border-0">
								<Select
									options={options}
									components={{ DropdownIndicator: () => null, IndicatorSeparator:() => null }}
									placeholder={"What are you looking for?"}
									styles={selectStyles}
								/>
							</Card>
							</Form.Group>
							<Form.Group>
								<Card style={styles.from_card} className="border-0">
									<Form.Control style={styles.input} placeholder="First name" />
								</Card>
							</Form.Group>
							<Form.Group>
								<Button style={styles.btn} variant="warning" size="lg" block>
									Search
								</Button>
							</Form.Group>
						</Form>
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
