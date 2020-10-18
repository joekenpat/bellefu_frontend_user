import React, { useState, useEffect } from "react";
import { Card, Row, Image, Col } from "react-bootstrap";
import avater_placeholder from "../images/avater_placeholder.jpg";
import { IoIosTime, IoMdMailOpen } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import Moment from "react-moment";

export default function UserAdInfo(props) {
	const [userprofile, setProfileState] = useState(props);
	useEffect(() => {
		setProfileState(props);
	}, [props]);
	return (
		<div>
			<Card className="border-0 ">
				<Card.Header
					className="border-0"
					style={{ backgroundColor: "#76ba1b" }}>
					<b style={{ color: "white" }}>Advertiser Info</b>
				</Card.Header>
				<Card.Body>
					<Row>
						<Col
							xm={12}
							sm={12}
							md={12}
							lg={12}
							xl={12}
							className="text-center">
							<Image
								src={avater_placeholder}
								style={styles.avater}
								roundedCircle
							/>
						</Col>
						<Col
							xm={12}
							sm={12}
							md={12}
							lg={12}
							xl={12}
							className="text-center mt-2">
							<p>
								<b>{userprofile.user && userprofile.user.profile.first_name}</b>
								<b className="ml-1">
									{userprofile.user && userprofile.user.profile.last_name}
								</b>
							</p>
						</Col>
						<Col
							xm={12}
							sm={12}
							md={12}
							lg={12}
							xl={12}
							className="text-center mt-2">
							<div>
								<IoIosTime style={styles.icon} className="mr-3" />{" "}
								<span style={styles.text}>
									
									<Moment format="D MMM YYYY" withTitle>
                                    {userprofile.user && userprofile.user.created_at}
									</Moment>
								</span>
							</div>
						</Col>
						<Col
							xm={12}
							sm={12}
							md={12}
							lg={12}
							xl={12}
							className="text-center mt-2">
							<div>
								<AiFillPhone style={styles.icon} className="mr-3" />{" "}
								<span style={styles.text}>
									<b>{userprofile.user && userprofile.user.phone}</b>
								</span>
							</div>
						</Col>
						<Col
							xm={12}
							sm={12}
							md={12}
							lg={12}
							xl={12}
							className="text-center mt-2">
							<div>
								<IoMdMailOpen style={styles.icon} className="mr-3" />{" "}
								<a
									href={`mailto:${userprofile.user &&
										userprofile.user.enail}?subject=subject text`}>
									<span style={styles.text}>
										<b>Reply By Mail</b>
									</span>
								</a>
							</div>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
}

const styles = {
	avater: {
		height: "100px"
	},
	icon: {
		color: "#ffa500",
		fontSize: "20px"
	},
	text: {
		fontSize: "15px"
	}
};
