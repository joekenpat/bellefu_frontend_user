import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Card,
	Col,
	Row,
	OverlayTrigger,
	Badge,
	Tooltip
} from "react-bootstrap";
import pic from "../images/pic.jpg";

import { BsArrowLeftRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Price from "./Price";
import Fav from "./Fav";

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (convert)
const convertTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		convert currency
	</Tooltip>
);




export default function PremiunAds(props) {
	const [productsData, setProductsData] = useState([]);

	const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;

	let apiUrl = "https://dev.bellefu.com/api/product/home/premium/latest";

	const loadData = () => {
		axios
			.get(apiUrl, {
				headers: {
					// Authorization: user ? `Bearer ${user.token}` : 'hh',
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				console.log(res.data.premium_products)
				setProductsData(res.data.premium_products);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	

useEffect(() => {
	loadData();
}, [productsData.length])

	return (
		<div>
			<Row>
			{ productsData.map((data) => (
										<Col
											key={data.slug}
											xs={6}
											sm={6}
											md={3}
											lg={3}
											xl={3}
											className=" my-1 px-1">
												
											<Card className="border-0 rounded-lg">
												<Card.Img
													style={styles.image}
													variant="top"
													src={`https://dev.bellefu.com/images/products/${data.slug}/${data.images[0]}`}
												/>

												<Card.ImgOverlay style={{ marginTop: "-15px" }}>
													<Row>
														<Col xs={8} sm={8} md={8} lg={8} xl={8}>
															<Badge
																variant="danger"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "featured"
																		? "d-none"
																		: "d-block" || data.plan === "higlighted"
																		? "d-none"
																		: "d-block" || data.plan === "Ugent"
																		? "d-block"
																		: "d-none"
																}`}>
																Ugent
															</Badge>
															<Badge
																variant="warning"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "ugent"
																		? "d-none"
																		: "d-block" || data.plan === "higlighted"
																		? "d-none"
																		: "d-block" || data.plan === "Featured"
																		? "d-block"
																		: "d-none"
																}`}>
																}`}> Featured
															</Badge>
															<Badge
																variant="success"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "ugent"
																		? "d-none"
																		: "d-block" || data.plan === "featured"
																		? "d-none"
																		: "d-block" || data.plan === "Higlighted"
																		? "d-block"
																		: "d-none"
																}`}>
																Higlighted
															</Badge>
														</Col>
														<Col xs={4} sm={4} md={4} lg={4} xl={4}>
															<Fav {...props} user={user} data={data} />
														</Col>
													</Row>
												</Card.ImgOverlay>

												<Card.Body style={styles.titleBody}>
													<Link
														to={{
															pathname: `/product_detail/${data.slug}`,
															state: data.slug
														}}
														style={{
															color: "inherit",
															textDecoration: "inherit"
														}}>
														<p style={styles.title}>{data.title}</p>
													</Link>

													
												</Card.Body>
											</Card>
											<div style={{backgroundColor: 'white', paddingBottom: '10px'}}>
											<Price styles={styles} data={data} {...props} convertTooltip={convertTooltip} />
											</div>
										</Col>
									))
							}
							</Row>
		</div>
	);
}

const styles = {
	image: {
		height: "150px",
		padding: "5px",
		borderRadius: "10px"
	},
	title: {
		opacity: "0.9",
		fontSize: "14px",
		width: "150px",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		marginTop: "-6px"
	},
	titleBody: {
		padding: "5px",
		paddingLeft: "10px"
	},
	price: {
		fontSize: "0.8em",
		backgroundColor: "whitesmoke",
		padding: "5px",
		color: "#ffa500"
	},
	favBtn: {
		marginBottom: "-220px",
		fontSize: "30px",
		color: "#ffa500",
		cursor: "pointer",
		padding: "2px",
		borderRadius: "50px",
		backgroundColor: "white"
	}
};
