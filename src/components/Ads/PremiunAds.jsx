import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Card,
	Col,
	Row,
	OverlayTrigger,
	Badge,
	Tooltip,
	Accordion,
	Button
} from "react-bootstrap";
import pic from "../images/pic.jpg";
import { FaCommentDots, FaMobileAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { BsArrowLeftRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Price from "./Price";
import Fav from "./Fav";
import MobileAds from "./MobileAds";
import InfiniteScroll from 'react-infinite-scroll-component';

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (convert)
const convertTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		convert currency
	</Tooltip>
);




export default function PremiunAds(props) {
	const [productsData, setProductsData] = useState([]);
	const [products, setProducts] = useState([])
	const [nextPageUrl, setNextPageUrl] = useState('')
	let apiUrl = `https://dev.bellefu.com/api/product/list?country=${props.country.country_slug}`;

	const loadData = () => {
		axios
			.get(apiUrl, {
				headers: {
					Authorization: props.user ? `Bearer ${props.user.token}` : 'hfh',
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setProducts(res.data.products)
				setProductsData(res.data.products.data);
				setNextPageUrl(res.data.products.next_page_url)
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const nextData = () => {
		axios
			.get(nextPageUrl, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setProducts(res.data.products)
				setNextPageUrl(res.data.products.next_page_url)
				setProductsData(productsData.concat(...res.data.products.data))
				console.log(productsData)
			})
	}

	

useEffect(() => {
	loadData();
}, [])

	return (
		<div>
			<Row>
			{ productsData.map((data) => (
										<Col
											key={data.slug}
											xs={12}
											sm={12}
											md={6}
											lg={4}
											xl={4}
											className="my-2 px-1">
											<Card className="d-none cursor d-md-block border-0 pc-card-shadow">
												<Link to={{
													pathname: `/product_detail/${data.slug}`,
													state: data.slug
													}}
													style={{
														color: "inherit",
														textDecoration: "inherit"
													}}>

												<Card.Img
													style={styles.image}
													variant="top"
													src={`https://dev.bellefu.com/images/products/${data.slug}/${data.images[0]}`}
												/>
												</Link>
												<Card.ImgOverlay style={{ marginTop: "-15px" }}>
													<Row>
														<Link to={{
																pathname: `/product_detail/${data.slug}`,
																state: data.slug
															}}
															style={{
																color: "inherit",
																textDecoration: "inherit"
															}}>

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
																		: "d-block" || data.plan === "urgent"
																		? "d-block"
																		: "d-none"
																}`}>
																Urgent
															</Badge>
															<Badge
																variant="warning"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "urgent"
																		? "d-none"
																		: "d-block" || data.plan === "higlighted"
																		? "d-none"
																		: "d-block" || data.plan === "Featured"
																		? "d-block"
																		: "d-none"
																}`}>
																 Featured
															</Badge>
															<Badge
																variant="success"
																className={`${
																	data.plan === "free"
																		? "d-none"
																		: "d-block" || data.plan === "urgent"
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
														</Link>
														<Col xs={4} sm={4} md={4} lg={4} xl={4}>
															<Fav {...props} user={props.user} data={data} />
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
														<p className="product-title">{data.title}</p>
													</Link>

													
												</Card.Body>
											</Card>
											
											<div className="d-none d-md-block" style={{backgroundColor: 'white', paddingBottom: '10px'}}>
												<Price styles={styles} data={data} {...props} convertTooltip={convertTooltip} />
											</div>
											<MobileAds  {...props} data={data} convertTooltip={convertTooltip} />
										</Col>
									))
							}
			</Row>
			<div className="mt-4">
			<InfiniteScroll
				dataLength={productsData.length}
				next={nextData}
				hasMore={products.current_page !== products.last_page ? true : false}
				loader={<h4 style={{textAlign: 'center', color: 'gray'}}>Loading...</h4>}
				endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Yay! You have seen it all</b>
				</p>
				}
				>
			</InfiniteScroll>
			</div>
		</div>
	);
}

const styles = {
	image: {
		height: "150px",
		padding: "5px",
		borderRadius: "10px"
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
