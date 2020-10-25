import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
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
]

const MobileInput = (props) => {
    return (
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
            <Form.Group style={{backgroundColor: 'white', borderRadius: '5px'}}>
                <div onClick={props.setModalShow} className="cursor" style={styles.input}>
                    <span className="pl-2">
                        <IconContext.Provider value={{ color: "#808080", size: '17px'}}>
                            <FaMapMarkerAlt/>
                        </IconContext.Provider>
                    </span>
                    {Object.keys(props.state).length === 0 ? (
                        <span style={{fontSize: '12.5px', color: '#808080'}} className="ml-2">Where?  {props.country.country_name}</span>
                    ) : (

                        <span style={{fontSize: '12.5px', color: '#808080'}} className="ml-2">{Object.keys(props.lga).length > 0 ? `${props.lga.name}, ${props.state.name}, ${props.country.country_name}` : `${props.state.name}, ${props.country.country_name}`}</span>
                    )
                    }
                </div>
            </Form.Group>
            <Form.Group>
                <Button style={styles.btn} variant="warning" size="lg" block>
                    Search
                </Button>
            </Form.Group>
        </Form>
    )
}

export default MobileInput


const selectStyles = {
	control: (styles) => ({
		...styles,
		backgroundColor: "white",
		border: "none",
		borderRadius: "50px",
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
        fontSize: "13px",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
	},
	btn: {
		height: "50px",
		marginTop: "10px",
		backgroundColor: "#ffa500",
		border: "none",
		color: "white"
	}
};
