import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";
import { AiFillPhone, AiFillEye } from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Moment from "react-moment";

function AdDetails(props) {
	const [productsDataDetail, setProductsDataDetail] = useState(props);

	useEffect(() => {
		setProductsDataDetail(props);
	}, [props]);

	return (
		<div>
			<Row>
				<Col>
					<Card className="border-0">
						<Card.Header
							className="border-0"
							style={{ backgroundColor: "#76ba1b" }}>
							<b style={{ color: "white" }}>AdDetails</b>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<MdLocationOn style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>Location</b>
										</span>
									</div>
									<p className="ml-5">{productsDataDetail.address}</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<GiReceiveMoney style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>Price</b>
										</span>
									</div>
									<p className="ml-5 ">
										{productsDataDetail.currency_symbol}
										{productsDataDetail.price}
									</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<IoIosTime style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>Posted</b>
										</span>
									</div>
									<p className="ml-5">
										<Moment format="D MMM YYYY" withTitle>
											{productsDataDetail.created_at}
										</Moment>
									</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<AiFillPhone style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>Phone Number</b>
										</span>
									</div>
									<p className="ml-5 ">{productsDataDetail.phone}</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<AiFillEye style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>Ad Views</b>
										</span>
									</div>
									<p className="ml-5">{productsDataDetail.inorganic_views}</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<FaSlackHash style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>Ad </b>
										</span>
									</div>
									<p className="ml-5 ">{productsDataDetail.slug}</p>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className="border-0 mt-4">
						<Card.Header
							className="border-0"
							style={{ backgroundColor: "#76ba1b" }}>
							<b style={{ color: "white" }}>Ad Discription</b>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<span style={styles.text}>
										{productsDataDetail.description}
									</span>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

const styles = {
	icon: {
		color: "#ffa500",
		fontSize: "30px"
	},
	text: {
		fontSize: "15px"
	}
};

export default AdDetails;
