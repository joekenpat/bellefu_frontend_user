import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import Select from "react-select";
import {FaMapMarkerAlt} from 'react-icons/fa'
import {IconContext} from 'react-icons'



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
export default function DesktopInput(props) {
	return (
		<div style={{backgroundColor: 'white'}}>
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
						<div onClick={props.setModalShow} className="cursor" style={styles.input}>
							<span >
								<IconContext.Provider value={{ color: "#808080", size: '17px', style:{paddingBottom: '3px'}}}>
									<FaMapMarkerAlt/>
								</IconContext.Provider>
							</span>
							{Object.keys(props.state).length === 0 ? (
								<span style={{fontSize: '16px'}} className="ml-2">Where</span>
							) : (

								<span style={{fontSize: '16px'}} className="ml-2">{Object.keys(props.lga).length > 0 ? `${props.lga.name}, ${props.state.name}, ${props.country.country_name}` : `${props.state.name}, ${props.country.country_name}`}</span>
							)
						}
						</div>
					</Col>
						{/* props.state.slug, props.lga.slug, props.country.country_slug */}
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
		color: "#808080",
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
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
