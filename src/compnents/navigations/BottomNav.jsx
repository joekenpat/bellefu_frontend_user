import React from "react";
import { Navbar, Image} from "react-bootstrap";
import { AiOutlineHome,AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import postad from "../images/postad.png";


export default function BottomNav() {
	return (
		<div className="d-sm-none  ">
			<Navbar fixed="bottom"  className="pt-0 pb-0" style={styles.head} variant="dark">
				<Navbar.Brand className="text-center mr-auto  ml-auto">
					<AiOutlineHome style={styles.icon} />
					<p style={styles.text_icon}>Home</p>
				</Navbar.Brand>
				
				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>
				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>
				

				<Navbar.Brand className="text-center mr-auto  ml-auto">
					<MdFavoriteBorder style={styles.icon} />
					<p style={styles.text_icon}>Favourite</p>
				</Navbar.Brand>

				<Navbar.Brand style={styles.post_ad_bg} className="mr-auto  ml-auto">
				<Image src={postad} roundedCircle  style={styles.post_ad}/>
				</Navbar.Brand>

				<Navbar.Brand className="text-center mr-auto  ml-auto">
					<FiMail style={styles.icon} />
					<p style={styles.text_icon}>Message</p>
				</Navbar.Brand>

				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>
				<Navbar.Brand href="#home">
                     {/* ==THIS IS TO CREATE SPACES BETWEEN ICONS"}== */}
				</Navbar.Brand>

				<Navbar.Brand className="text-center mr-auto  ml-auto">
					<AiOutlineUser style={styles.icon} />
					<p style={styles.text_icon}>Account</p>
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
