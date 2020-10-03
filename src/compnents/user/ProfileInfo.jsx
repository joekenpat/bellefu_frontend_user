import React, { useEffect, useState } from "react";
import { Col, Row, Card, Image } from "react-bootstrap";
import avater_placeholder from "../images/avater_placeholder.jpg";
import { useSelector } from "react-redux";

import Preloader from "./Preloader";

export default function ProfileInfo() {
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
			<Card className="border-0">
				<Card.Body>
					{loading ? (
						<Preloader />
					) : (
						<Row>
							<Col
								xs={12}
								sm={12}
								md={12}
								lg={12}
								xl={12}
								className="text-center">
								<Image
									src={
										user.user.avatar !== null
											? `images/users/${user.user.username}/${user.user.avatar}`
											: avater_placeholder
									}
									style={styles.proPic}
								/>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={12}>
								<Card.Header className="bg-light pb-0 mt-3">
									<p style={styles.text}>
										<b className="mr-3 ">Name:</b>
										<span className="mr-2 ">
											{user.user.profile.first_name}
										</span>
										<span>{user.user.profile.last_name}</span>
									</p>
								</Card.Header>
								<Card.Header className="bg-light pb-0">
									<p style={styles.text}>
										<b className="mr-3 pt-2">Username:</b>
										{user.user.username}
									</p>
								</Card.Header>
								<Card.Header className="bg-light pb-0">
									<p style={styles.text}>
										<b className="mr-3 pt-2">Phone:</b>
										{user.user.phone}
									</p>
								</Card.Header>
								<Card.Header className="bg-light pb-0">
									<p style={styles.text}>
										<b className="mr-3 pt-2">Email:</b>
										{user.user.email}
									</p>
								</Card.Header>
								<Card.Header className="bg-light pb-0">
									<p style={styles.text}>
										<b className="mr-3 pt-2">Bio:</b>
										{user.user.bio}
									</p>
								</Card.Header>
							</Col>
						</Row>
					)}
				</Card.Body>
			</Card>
		</div>
	);
}

const styles = {
	proPic: {
		height: "300px",
		width: "300px"
	},
	text: {
		opacity: "0.8",
		fontSize: "15px"
	}
};
