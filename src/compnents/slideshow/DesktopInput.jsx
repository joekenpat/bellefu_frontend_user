import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import Select from "react-select";



const options = [
	{ value: "Aro food", label: "Agro food" },
	{ value: "Agro job", label: "Agro job" },
	{ value: "Agro tools", label: "Agro tools" },
	{ value: "Agro training", label: "Vanilla" },
	{ value: "Agro training", label: "Agro training" },
	{ value: "Agro training", label: "Agro training" },
	{ value: "vanilla", label: "Vanilla" },
	{ value: "vanilla", label: "Vanilla" }
];
export default function DesktopInput() {
	return (
		<div>
			<Form>
				<Form.Row>
					<Col lg={5} md={5} sm={12} clasName="mr-0 ml-0">
						<Select
							options={options}
							components={{ DropdownIndicator: () => null }}
							placeholder={"What are you looking for?"}
							styles={selectStyles}
						/>
					</Col>

					<Col lg={5} md={5} sm={12} clasName="mr-0 ml-0">
						<Form.Control style={styles.input} placeholder="First name" />
					</Col>

					<Col lg={2} md={2} sm={12} clasName="mr-0 ml-0">
						<Button style={styles.btn} variant="warning">
							Search
						</Button>
					</Col>
				</Form.Row>
			</Form>
		</div>
	);
}




const selectStyles = {
	control: (styles) => ({
		...styles,
		backgroundColor: "white",
		height: "68px",
		fontSize: "17px",
		border: "none",
		borderRadius: "none",
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
	input: {
		border: "none",
		borderRadius: "none",
		height: "68px",
		fontSize: "20px",
		color: "black"
	},
	btn: {
		height: "50px",
		marginTop: "10px",
		width: "100px",
		backgroundColor: "#ffa500",
		border: "none",
		color: "white"
	}
};
