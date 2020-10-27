import React, { useEffect } from "react";
import { Navbar, Image} from "react-bootstrap";
import { AiOutlineHome,AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import Axios from "axios";
import { useState } from "react";



export default function BottomNav() {
	const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;
	const [userData, setUserData] = useState({})
	let url = 'https://dev.bellefu.com/api/user/profile/details';

	useEffect(() => {
		Axios.get(url, {
			headers: {
				Authorization: `Bearer ${user.token ? user.token : 'fjjhj'}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		}).then((res) => {
			setUserData(res.data.user)
		})
	}, [])

	return (
		<div className="d-sm-none  ">
			<Navbar fixed="bottom"  className="pt-0 pb-0" style={styles.head} variant="dark">
				<Navbar.Brand className="text-center mr-auto  ml-auto">
				<Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
					<AiOutlineHome style={styles.icon} />
					<p style={styles.text_icon}>Home</p>
					</Link>
				</Navbar.Brand>
				
				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>
				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>
				

				<Navbar.Brand className="text-center mr-auto  ml-auto">
				<Link to="/favourite_ad" style={{ color: 'inherit', textDecoration: 'inherit'}}>
					<MdFavoriteBorder style={styles.icon} />
					<p style={styles.text_icon}>Favourite</p>
					</Link>
				</Navbar.Brand>

				<Navbar.Brand style={styles.post_ad_bg} className="mr-auto  ml-auto">
				<Link to="/post_ad" style={{ color: 'inherit', textDecoration: 'inherit'}}>	
				<Image src="https://dev.bellefu.com/images/misc/postad.png" roundedCircle  style={styles.post_ad}/>
				</Link>
				</Navbar.Brand>

				<Navbar.Brand className="text-center mr-auto  ml-auto">
				<Link to="/messages" style={{ color: 'inherit', textDecoration: 'inherit'}}>
					<div>
						<FiMail style={styles.icon} />
						{userData.has_unread_message && (
						<span style={{width: '9px', height: '9px', borderRadius: '10px', backgroundColor: '#ffa500', position: 'absolute'}} />

						)}
					</div>

					<p style={styles.text_icon}>
						<span>Message</span>
						
					</p>
				</Link>
				</Navbar.Brand>

				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>
				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>

				<Navbar.Brand className="text-center mr-auto  ml-auto">
				<Link to="/user_dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>
					<AiOutlineUser style={styles.icon} />
					<p style={styles.text_icon}>Account</p>
					</Link>
				</Navbar.Brand>

			</Navbar>
		</div>
	);
}


//THIS COMPONET STYLES GOES HERE
const styles = {
	head: {
		backgroundColor: "#76ba1b"
	},
	icon1: {
		color: "white",
		fontSize: "25px"
	},
	text_icon: {
		fontSize: "0.5em",
		marginBottom: "0px"
	},
	post_ad:{
		height: "70px",
		marginBottom: "0px",
		marginTop: "-30px",
		backgroundColor:"#76ba1b",
		borderRadius: "50px"
	},	
	
};
