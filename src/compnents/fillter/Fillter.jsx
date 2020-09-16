import React from "react";
import {
	Col,
	Row,
	Card,
	Form,
	Container,
	Button,
} from "react-bootstrap";
import Select, { components } from "react-select";
import { GoLocation } from "react-icons/go";

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

//FOR SELECT INCON
const { Option } = components;
const IconOption = (props) => (
	<Option {...props}>
		<GoLocation style={{ fontSize: 36 }} />
		{props.data.label}
	</Option>
);
export default function Fillter() {
	return (
		<div>
			<Form>
				<div>
					<Card className="border-0">
						<Container>
							<Form.Group>
								<Form.Label
									className="mt-3"
									style={{ opacity: "0.4", fontSize: "0.8em" }}>
									<b>Location</b>
								</Form.Label>
								<Select
									options={options}
									components={{ Option: IconOption }}
									placeholder={"--select location--"}
									styles={selectStyles}
									components={{}}
								/>
							</Form.Group>
						</Container>
					</Card>
				</div>
				<Card className="border-0">
					<Container>
						<Form.Group>
							<Form.Label style={{ opacity: "0.4", fontSize: "0.8em" }}>
								<b>Category</b>
							</Form.Label>
							<Select
								options={options}
								placeholder={"--select category--"}
								styles={selectStyles}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label style={{ opacity: "0.4", fontSize: "0.8em" }}>
								<b>Subcategory</b>
							</Form.Label>
							<Select
								options={options}
								placeholder={"--select subcategory--"}
								styles={selectStyles}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label style={{ opacity: "0.4", fontSize: "0.8em" }}>
								<b>Types</b>
							</Form.Label>
							<Select
								options={options}
								placeholder={"--select type--"}
								styles={selectStyles}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label style={{ opacity: "0.4", fontSize: "0.8em" }}>
								<b>Condition</b>
							</Form.Label>
							<Select
								options={options}
								placeholder={"--select condition--"}
								styles={selectStyles}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label style={{ opacity: "0.4", fontSize: "0.8em" }}>
								<b>Price</b>
							</Form.Label>
							<Row>
								<Col xs={6} sm={6} >
								<Form.Control  onFocus={inputFocus}  type="email" placeholder="Price min" />										
								</Col>
								<Col xs={6} sm={6} md={6} lg={6} xl={6}>
									<Form.Control onFocus={inputFocus} placeholder="Price max" />
								</Col>
							</Row>
						</Form.Group>
						<Form.Group>
							<Button style={styles.btn} variant="warning" size="lg" block>
								Appy Filter
							</Button>
						</Form.Group>
					</Container>
				</Card>
			</Form>
		</div>
	);
}


const inputFocus =(e) => {
e.target.style.outLineColor = "#ffa500 !important"
}

const selectStyles = {
	control: (styles) => ({
		...styles,
		backgroundColor: "white",
		height: "40px",
		fontSize: "13px",
		borderRadius: "5px",
		"&:focus": {
			borderColor: "1px solid green"
		}
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
			minHeight: "1px",
			textAlign: "left",
			"&:focus": {
				borderColor: "1px solid green"
			}
		};
	}
};

const styles = {
	btn: {
		marginTop: "10px",
		backgroundColor: "#ffa500",
		border: "none",
		color: "white"
	},
}

