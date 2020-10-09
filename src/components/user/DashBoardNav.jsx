import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { GoDashboard } from "react-icons/go";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import Preloader from "./Preloader";

import {
	AiOutlineUser,
	AiOutlineGift,
	AiOutlineHeart,
	AiOutlineMessage,
	AiOutlineAccountBook,
	AiOutlineSetting
} from "react-icons/ai";
import { IoMdTime, IoIosLogIn } from "react-icons/io";

import { MdDateRange } from "react-icons/md";

export default function DashBoardNav() { 
	return (
		<div>
				  
			<Card className="border-0">
				<Card.Header
					className="border-0"
					style={{ backgroundColor: "#76ba1b" }}>
					<b style={{ color: "white" }}>Links</b>
				</Card.Header>
				<div className="p-3">
					<h6 className="p-3" style={styles.head}>
						Classified
					</h6>
					<ul style={styles.list}>
						<Link to="/user_dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>
							<li
								className="pb-3 linking"
								onMouseOver={listHover}
								onMouseLeave={listHoverNone}>
								<GoDashboard className="mr-3" style={styles.icon} />
								Dasboard
							</li>
					</Link>
						<Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>
							<li
								className="pb-3"
								onMouseOver={listHover}
								onMouseLeave={listHoverNone}>
								<AiOutlineUser className="mr-3" style={styles.icon} />
								Profile public view
							</li>
						</Link>
					</ul>
					<h6 className="p-3" style={styles.head}>
						Ads
					</h6>
					<ul style={styles.list}>
						<Link to="/user_ad" style={{ color: 'inherit', textDecoration: 'inherit'}}>
							<li
								className="pb-3"
								onMouseOver={listHover}
								onMouseLeave={listHoverNone}>
								<AiOutlineGift className="mr-3" style={styles.icon} />
								My Ads
							</li>
						</Link>
						<Link to="/favourite_ad" style={{ color: 'inherit', textDecoration: 'inherit'}}>
							<li
								className="pb-3"
								onMouseOver={listHover}
								onMouseLeave={listHoverNone}>
								<AiOutlineHeart className="mr-3" style={styles.icon} />
								Favourite Ads
							</li>
						</Link>
						<Link to="/pending_ad" style={{ color: 'inherit', textDecoration: 'inherit'}}>
							<li
								className="pb-3"
								onMouseOver={listHover}
								onMouseLeave={listHoverNone}>
								<IoMdTime className="mr-3" style={styles.icon} />
								Pending Ads
							</li>
						</Link>

						<Link to="/expried_ad" style={{ color: 'inherit', textDecoration: 'inherit'}}>
							<li
								className="pb-3"
								onMouseOver={listHover}
								onMouseLeave={listHoverNone}>
								<MdDateRange className="mr-3" style={styles.icon} />
								Expired Ads
							</li>
						</Link>
					</ul>
					<h6 className="p-3" style={styles.head}>
						Account
					</h6>
					<ul style={styles.list}>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineMessage className="mr-3" style={styles.icon} />
							Message
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineAccountBook className="mr-3" style={styles.icon} />
							Transaction
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineSetting className="mr-3" style={styles.icon} />
							Settings
						</li>
						<li
							onClick={logout}
							className="pb-0"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<IoIosLogIn className="mr-3" style={styles.icon} />
							Logout
						</li>
					</ul>
				</div>
			</Card>
		</div>
	);
}

//LOGOUT
const logout = () => {
	Cookie.remove("user");
	window.location.reload();
};

const listHover = (e) => {
	e.target.style.color = "#ffa500";
};

const listHoverNone = (e) => {
	e.target.style.color = "black";
};

const styles = {
	list: {
		listStyleType: "none",
		fontSize: "15px",
		opacity: "0.7",
		cursor: "pointer",
		font: "bold"
	},
	head: {
		fontSize: "0.9em",
		color: "#ffa500"
	},
	icon: {}
};
