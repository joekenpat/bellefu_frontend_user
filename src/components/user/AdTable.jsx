import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import Preloader from "./Preloader";
import axios from "axios";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

import {
	Card,
	Badge,
	Image,
	Button,
	Tooltip,
	OverlayTrigger
} from "react-bootstrap";
import { AiOutlineTag, AiOutlineEye } from "react-icons/ai";
import { GoLocation, GoPencil } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (delete)
const deleteTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Delete Ad
	</Tooltip>
);

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (view ad)
const viewTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		View Ad
	</Tooltip>
);

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (edit)
const editTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Edit Ad
	</Tooltip>
);

const pageLimit = 10;
export default function AdTable() {
	const [loading, setLoading] = useState(true);
	const [ad, setAd] = useState([]);
	const [offset, setOffset] = useState(0);
	const [currentData, setCurrentData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;

	let url = "https://dev.bellefu.com/api/user/product/list";
	useEffect(() => {
		axios
			.get(url, {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((response) => {
				setLoading(false);
				setAd(response.data.products);
			})
			.catch((error) => {
				setLoading(false);
			});
		console.log(ad);
	});

	console.log(ad);
	useEffect(() => {
		setCurrentData(ad.data && ad.data.slice(offset, offset + pageLimit));
	}, [offset, ad.data && ad.data.length]);

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
								currentData &&
								currentData.map((data) => (
									<tr key={data.id}>
										<td className="uk-text-center">
											<Image
												src={`https://dev.bellefu.com/images/products/${data.slug}/${data.images[0]}`}
												style={styles.image}
											/>
										</td>
										<td>
											<p style={styles.title}>{data.title}</p>

											<Badge
												variant="danger"
												className={`${
													data.plan === "free"
														? "d-none"
														: "d-block" || data.plan === "featured"
														? "d-none"
														: "d-block" || data.plan === "higlighted"
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
														: "d-block" || data.plan === "ugent"
														? "d-none"
														: "d-block" || data.plan === "higlighted"
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
														: "d-block" || data.plan === "ugent"
														? "d-none"
														: "d-block" || data.plan === "featured"
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
													{data.created_at}
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
													overlay={viewTooltip}>
													<Link
														to={{
															pathname: `/product_detail/${data.slug}`,
															state: data.slug
														}}
														style={{
															color: "inherit",
															textDecoration: "inherit"
														}}>
														<Button size="sm" variant="light">
															<AiOutlineEye style={{ color: "#ffa500" }} />
														</Button>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger
													placement="bottom"
													delay={{ show: 50, hide: 100 }}
													overlay={editTooltip}>
													<Button size="sm" variant="light">
														<GoPencil style={{ color: "green" }} />
													</Button>
												</OverlayTrigger>

												<OverlayTrigger
													placement="bottom"
													delay={{ show: 50, hide: 100 }}
													overlay={deleteTooltip}>
													<Button size="sm" variant="light">
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

					<Paginator
						totalRecords={ad.data && ad.data.length}
						pageLimit={pageLimit}
						pageNeighbours={2}
						setOffset={setOffset}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
					{ad.data ? (
						<div className="d-flex flex-row py-4 justify-content-end">
							<Paginator
								totalRecords={ad.length}
								pageLimit={4}
								pageNeighbours={1}
								setOffset={setOffset}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						</div>
					) : (
						<div className="text-center ">
							<p>No Ad</p>
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
	title: {
		opacity: "0.9",
		fontSize: "15px",
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
