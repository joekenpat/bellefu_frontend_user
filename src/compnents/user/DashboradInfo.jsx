import React, { useEffect, useState } from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import avater_placeholder from "../images/avater_placeholder.jpg";
import Preloader from "./Preloader";
import {
	AiOutlineHeart,
	AiOutlineGift,
	AiOutlineEyeInvisible
} from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useSelector } from "react-redux";

export default function DashboradInfo() {
	const [loading, setLoading] = useState(true);
	const userSignin = useSelector((state) => state.userSignin);

	const { user } = userSignin;
	
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => {};
	}, [user]);

	return (
		<div>
			<Card className="border-0 text-center" style={{ padding: "20px" }}>
	{loading ? (<Preloader/>) :(
				<Row>
					<Col xs={6} sm={6} md={6} lg={2} xl={2}>
						<Image
							src={
								user.user.avatar !== null
									? `images/users/${user.user.username}/${user.user.avatar}`
									: avater_placeholder
							}
							style={styles.avater}
							roundedCircle
						/>
					</Col>
					<Col xs={6} sm={6} md={6} lg={2} xl={2}>
						<p style={styles.data}> 0</p>
						<span>
							<AiOutlineGift style={styles.icon} className="mr-2" />
							<label style={styles.text}> My Ads</label>
						</span>
					</Col>
					<Col xs={6} sm={6} md={6} lg={2} xl={2}>
						<p style={styles.data}> 0345</p>
						<span>
							<AiOutlineHeart style={styles.icon} className="mr-2" />
							<label style={styles.text}>Favourite</label>
						</span>
					</Col>
					<Col xs={6} sm={6} md={6} lg={2} xl={2}>
						<p style={styles.data}>0</p>
						<span>
							<IoMdTime style={styles.icon} className="mr-2" />
							<label style={styles.text}>Pending Ads</label>
						</span>
					</Col>
					<Col xs={6} sm={6} md={6} lg={2} xl={2}>
						<p style={styles.data}>18</p>
						<span>
							<MdDateRange style={styles.icon} className="mr-2" />
							<label style={styles.text}>Expired Ads</label>
						</span>
					</Col>
					<Col xs={6} sm={6} md={6} lg={2} xl={2}>
						<p style={styles.data}> 34</p>
						<span>
							<AiOutlineEyeInvisible style={styles.icon} className="mr-2" />
							<label style={styles.text}>Hiden Ads</label>
						</span>
					</Col>
				</Row>
				)}
			</Card>
		</div>
	);
}

const styles = {
	avater: {
		height: "60px"
	},
	icon: {
		fotsize: "30px",
		color: "#ffa500"
	},
	text: {
		opacity: "0.7",
		fontSize: "0.9em"
	},
	data: {
		fontSize: "0.7em",
		marginBottom: "-3px",
		marginTop: "15px"
	}
};
