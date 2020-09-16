import React from "react";
import { Card } from "react-bootstrap";
import { GoDashboard } from "react-icons/go";
import {
	AiOutlineUser,
	AiOutlineUsergroupAdd,
	AiOutlineGift,
	AiOutlineHeart,
	AiOutlineEyeInvisible,
	AiOutlineMessage,
	AiOutlineAccountBook,
	AiOutlineSetting
} from "react-icons/ai";
import { IoMdTime, IoIosLogIn } from "react-icons/io";
import { MdDateRange } from "react-icons/md"

export default function DashBoardNav() {
	return (
		<div>
			<Card className="border-0">
			<Card.Header className="border-0" style={{backgroundColor: "#76ba1b"}}>
					<b style={{  color: "white" }}>Links</b>
				</Card.Header>
				<div className="p-3">
					<h6 className="p-3" style={styles.head}>
				    Classified
					</h6>
					<ul style={styles.list}>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<GoDashboard className="mr-3" style={styles.icon} />
							Dasboard
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineUser className="mr-3" style={styles.icon} />
							Profile public view
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineUsergroupAdd className="mr-3" style={styles.icon} />
							Menbership
						</li>
					</ul>
					<h6 className="p-3" style={styles.head}>
						Ads
					</h6>
					<ul style={styles.list}>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineGift className="mr-3" style={styles.icon} />
							My Ads
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineHeart className="mr-3" style={styles.icon} />
							Favourite Ads
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<IoMdTime className="mr-3" style={styles.icon} />
							Pending Ads
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<AiOutlineEyeInvisible className="mr-3" style={styles.icon} />
							Hidden Ads
						</li>
						<li
							className="pb-3"
							onMouseOver={listHover}
							onMouseLeave={listHoverNone}>
							<MdDateRange className="mr-3" style={styles.icon} />
							Expired Ads
						</li>
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

const listHover = (e) => {
	e.target.style.color = "#ffa500";
};
const listHoverBg = (e) => {
	
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
	icon: {
		
	}
};
