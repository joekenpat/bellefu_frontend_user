import React, {useState, useEffect} from "react";
import { Navbar, Nav, Button, Tooltip, OverlayTrigger, Modal, Row, Col, Container } from "react-bootstrap";
import SideNav from "./SideNav";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from 'axios';
import Flag from 'react-world-flags';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserCountry} from '../../redux/actions/userCountry'


//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (CHANGE CONTRY)
const renderTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Change Contry
	</Tooltip>
);

//THIS IS A HEADER COMPOENT
export default function HeaderNav(props) {
	const dispatch = useDispatch();
	const country = useSelector((state) => state.userCountry);

	const [show, setShow] = useState(false)
	const [countries, setCountries] = useState([])

	const url = 'https://dev.bellefu.com/api/country/list'

	const onFlagClick = (code) => {
		setShow(false)
		fetch(`https://dev.bellefu.com/api/location/info/set/country/${code}`)
		.then((res) => res.json())
		.then((data) => {
			dispatch(updateUserCountry(data.location_info))
			window.location.reload(true)
		});
	}

	const fetchCountries = () => {
		fetch(url)
		.then((res) => res.json())
		.then((data) => {
			setCountries(data.countries)
		}).catch((e) => console.log('this is error: ', e))
	}

	useEffect(() => {
		fetchCountries()
	}, [])


	return (
		<div>
			<Navbar style={styles.head} className=" shadow-sm fixed-top">
				<Navbar.Brand as={Link} to="/">
					<img src={logo} style={styles.logo} />
				</Navbar.Brand>
				<Navbar.Brand>
					<OverlayTrigger
						placement="right"
						delay={{ show: 250, hide: 400 }}
						overlay={renderTooltip}>
						<Button onClick={() => setShow(!show)} variant="outline-warning" style={styles.contrey_btn}>
							<Flag style={{width: '12px', height: '12px'}} code={country.country_iso2} />{'  '}country
						</Button>
					</OverlayTrigger>
				</Navbar.Brand>

				<Navbar.Collapse className="justify-content-end">
					<Nav.Link
						as={Link}
						to="/user_dashboard"
						className={`${
							Cookie.get("user")
								? "d-none d-lg-block  d-md-none"
								: "d-none d-lg-none  d-md-none"
						}`}
						style={styles.auth}>
						Dashboard
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/user_dashboard"
						onClick={logout}
						className={`${
							Cookie.get("user")
								? "d-none d-lg-block  d-md-none"
								: "d-none d-lg-none  d-md-none"
						}`}
						style={styles.auth}>
						LogOut
					</Nav.Link>

					<Nav.Link
						as={Link}
						to="/login"
						className={`${
							Cookie.get("user")
								? "d-none d-lg-none  d-md-none"
								: "d-none d-lg-block  d-md-none"
						}`}
						style={styles.auth}>
						Login
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/register"
						className={`${
							Cookie.get("user")
								? "d-none d-lg-none  d-md-none"
								: "d-none d-lg-block  d-md-none"
						}`}
						style={styles.auth}>
						Register
					</Nav.Link>
					<Navbar.Brand className="d-none d-lg-block  d-md-none">
						<Link to="/post_ad">
						<Button variant="warning" style={styles.post_free_add_btn}>
							Post Free Ad
						</Button>
						</Link>
					</Navbar.Brand>
					<Navbar.Brand styles={styles.language}>
						<Button variant="warning" style={styles.post_free_add_btn}>
							EN
						</Button>
					</Navbar.Brand>
					<Navbar.Brand className="d-lg-none d-xs-block  d-sm-block d-md-block">
						<SideNav />
					</Navbar.Brand>
				</Navbar.Collapse>
			</Navbar>
			<Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="select-country-modal" centered>
				<Modal.Header closeButton>
					<Modal.Title className="text" id="select-country-modal">
						<Container>Select Your Country</Container>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row  style={{height: '300px', overflowY: 'scroll'}}>
							{countries.map((data, index) => (
								<Col key={index} style={{marginTop: '10px'}} className="cursor country" sm={4}>
									<div onClick={() => onFlagClick(data.iso2, data.name)}>
										<Flag className="flag" code={data.iso2} /> {data.name}
									</div>
									
								</Col>
							))}
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</div>
	);
}


//LOGOUT
const logout = () => {
	Cookie.remove("user");
	window.location.reload();
};


//THE COMPONET STYLES GOES HERE.....
const styles = {
	head: {
		backgroundColor: "#76ba1b"
	},
	post_free_add_btn: {
		color: "white",
		backgroundColor: "#ffa500",
		border: "none"
	},
	auth: {
		color: "white"
	},
	contrey_btn: {
		color: "white",
		fontSize: "0.6em"
	},
	logo: {
		height: "30px",
		backgroundColor: "white",
		borderRadius: "5px"
	},

	nav_icon: {
		border: "5px solid red"
	}
};
