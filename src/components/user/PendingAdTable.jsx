import React, { useState, useEffect } from "react";
import Pagination from "reactjs-hooks-pagination";
import Preloader from "./Preloader";
import axios from "axios";
import { useSelector } from "react-redux";
import {
	Card,
	Badge,
	Image,
	Button,
	Tooltip,
	OverlayTrigger
} from "react-bootstrap";
import { AiOutlineTag } from "react-icons/ai";
import { GoLocation, GoPencil } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import InfiniteScroll from 'react-infinite-scroll-component';
import pic from "../images/pic.jpg";

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (delete)
const deleteTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Delete Ad
	</Tooltip>
);

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (edit)
const editTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Edit Ad
	</Tooltip>
);
const pageLimit = 10;
export default function PendingAdTable() {
	const [loading, setLoading] = useState(true);
	const [ad, setAd] = useState([]);
	const [products, setProducts] = useState([])
	const [nextPageUrl, setNextPageUrl] = useState('')
	const [status, setStatus] = useState('loading')

	const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;


	const nextData = () => {
		setLoading(false);
		axios
			.get(nextPageUrl, {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setProducts(res.data.products)
				setNextPageUrl(res.data.products.next_page_url)
				console.log('called next page: ', nextPageUrl)
				setAd(ad.concat(...res.data.products.data))
			})
	}

	let url = "https://dev.bellefu.com/api/user/product/pending";

	useEffect(() => {
		axios
			.get(`${url}`, {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setLoading(false);
				setProducts(res.data.products)
				console.log(res.data.products.data)
				setAd(res.data.products.data);
				setNextPageUrl(res.data.products.next_page_url)
				if(res.data.products.data.length < 1){
					setStatus('No Expired Ad')
				}
			})
			.catch((error) => {
				setStatus('No Pending Ad')
				setLoading(false);
				setAd([]);
			});
	
}, []);

	return (
		<div>
			<Card className="border-0">
				<Card.Body>
					<table class="uk-table uk-table-responsive uk-table-divider">
						<thead style={{ backgroundColor: "#76ba1b", color: "white" }}>
							<tr>
								<th
									style={{ color: "white", fontWeight: "bold" }}
									className="uk-table-expand">
									Ads
								</th>
								<th
									style={{ color: "white", fontWeight: "bold" }}
									className="uk-width-*">
									{" "}
								</th>

								<th style={{ color: "white", fontWeight: "bold" }}>Status</th>
								<th
									className="uk-table-expand"
									style={{ color: "white", fontWeight: "bold" }}>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{loading ? (
								<Preloader />
							) : (
								
								ad.map((data) => (
									<tr key={data.id}>
										<td className="uk-text-center">
											<Image src={data.images[0]} style={styles.image} />
										</td>
										<td>
											<p style={styles.titel}>{data.title}</p>
											<Badge
												variant="danger"
												className={`${
													data.plan === "free"
														? "d-none"
														: "d-block" ||
														  data.plan === "featured"
														? "d-none"
														: "d-block" ||
														  data.plan === "higlighted"
														? "d-none"
														: "d-block"
												}`}>
												Ugent
											</Badge>
											<Badge
												variant="warning"
												className={`${
													data.plan === "free"
														? "d-none"
														: "d-block" ||
														  data.plan === "ugent"
														? "d-none"
														: "d-block" ||
														  data.plan === "higlighted"
														? "d-none"
														: "d-block"
												}`}>
												Featured
											</Badge>
											<Badge
												variant="success"
												className={`${
													data.plan === "free"
														? "d-none"
														: "d-block" ||
														  data.plan === "ugent"
														? "d-none"
														: "d-block" ||
														  data.plan === "featured"
														? "d-none"
														: "d-block"
												}`}>
												Higlighted
											</Badge>
											
											<div className="mt-3">
												<AiOutlineTag style={styles.icon} className="mr-2" />
												<span style={styles.category} className="ml-2 mt-3">
													{data.category.name}
												</span>
												<span style={styles.subCategory} className="ml-2 mt-5">
													{data.subcategory.name}
												</span>
											</div>
											<div className="mt-3">
												<GoLocation style={styles.icon} className="mr-1" />
												<span style={styles.location} className="ml-1 ">
													{data.address}
												</span>
												<MdDateRange
													style={styles.icon}
													className="mr-1 ml-1"
												/>
												<span style={styles.date} className="ml-1 ">
													Post Date: 02-May-23
												</span>
												<span className="ml-2" style={styles.price}>
													{data.currency_symbol}
													{data.price}
												</span>
											</div>
										</td>
										<td>
											<Badge
												style={{ backgroundColor: "#b8e6b8", color: "white" }}
												className="ml-2">
												active
											</Badge>
										</td>
										<td>
											<div className="btn-group" role="group">
												<OverlayTrigger
													placement="bottom"
													delay={{ show: 50, hide: 100 }}
													overlay={editTooltip}>
													<Button size="lg" variant="light">
														<GoPencil style={{ color: "green" }} />
													</Button>
												</OverlayTrigger>

												<OverlayTrigger
													placement="bottom"
													delay={{ show: 50, hide: 100 }}
													overlay={deleteTooltip}>
													<Button size="lg" variant="light">
														<IoMdTrash style={{ color: "red" }} />
													</Button>
												</OverlayTrigger>
											</div>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
					<InfiniteScroll
						dataLength={ad.length}
						next={nextData}
						hasMore={products.current_page !== products.last_page ? true : false}
						loader={<h4 style={{textAlign: 'center', color: 'gray'}}>Loading...</h4>}
						endMessage={
						<p style={{ textAlign: 'center' }}>
							
						</p>
						}
						>
					</InfiniteScroll>
					{ad.length < 1 && (
						<div className={"text-center"}>
							<p>{status}</p>
						</div>
					)}
				</Card.Body>
			</Card>
		</div>
	);
}
const styles = {
	image: {
		height: "100px"
	},
	icon: {
		fotsize: "30px",
		color: "#ffa500"
	},
	titel: {
		opacity: "0.9",
		fontSize: "20px",
		width: "300px",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis"
	},
	category: {
		fontSize: "0.7em",
		color: "#ffa500",
		backgroundColor: "whitesmoke",
		padding: "3px"
	},
	subCategory: {
		fontSize: "0.7em",
		color: "#ffa500",
		backgroundColor: "whitesmoke",
		padding: "3px"
	},
	location: {
		fontSize: "0.7em"
	},
	date: {
		fontSize: "0.7em"
	},
	price: {
		fontSize: "0.9em",
		color: "#ffa500",
		backgroundColor: "whitesmoke",
		padding: "3px"
	}
};
