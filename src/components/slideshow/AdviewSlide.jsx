import React, { useState, useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import pic from "../images/pic.jpg";

import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle
} from "react-icons/io";

// ====PRODUCT TITLE & TAGS====
function ProductTitle(props) {
	const [productTitel, setProductTitel] = useState(props);
	useEffect(() => {
		setProductTitel(props);
	}, [props]);
	return (
		<div>
			{/* ===FOR DESKTOP VIEW=== */}
			<div
				className="d-none d-lg-block  d-md-none"
				style={{ marginBottom: "15px" }}>
				<span
					className="mb-5"
					style={{
						fontSize: "15px"
					}}>
					<b>{productTitel.title}</b>
				</span>
				<Badge
					variant="danger"
					className={`${
						productTitel.plan === "free"
							? "d-none"
							: "d-block" || productTitel.plan === "featured"
							? "d-none"
							: "d-block" || productTitel.plan === "higlighted"
							? "d-none"
							: "d-block" || productTitel.plan === "Ugent"
							? "d-block"
							: "d-none"
					}`}>
					Urgent
				</Badge>
				<Badge
					variant="warning"
					className={`${
						productTitel.plan === "free"
							? "d-none"
							: "d-block" || productTitel.plan === "urgent"
							? "d-none"
							: "d-block" || productTitel.plan === "higlighted"
							? "d-none"
							: "d-block" || productTitel.plan === "Featured"
							? "d-block"
							: "d-none"
					}`}>
					}`}> Featured
				</Badge>
				<Badge
					variant="success"
					className={`${
						productTitel.plan === "free"
							? "d-none"
							: "d-block" || productTitel.plan === "urgent"
							? "d-none"
							: "d-block" || productTitel.plan === "featured"
							? "d-none"
							: "d-block" || productTitel.plan === "Higlighted"
							? "d-block"
							: "d-none"
					}`}>
					Higlighted
				</Badge>
			</div>

			{/* ===FOR MOBILE VIEW=== */}
			<div
				className=" d-lg-none  d-xs-block d-sm-block d-md-block "
				style={{ marginBottom: "15px" }}>
				<span
					className="mb-5"
					style={{
						fontSize: "15px"
					}}>
					<b>{productTitel.title}</b>
				</span>
				<Badge
					variant="danger"
					className={`${
						productTitel.plan === "free"
							? "d-none"
							: "d-block" || productTitel.plan === "featured"
							? "d-none"
							: "d-block" || productTitel.plan === "higlighted"
							? "d-none"
							: "d-block" || productTitel.plan === "Urgent"
							? "d-block"
							: "d-none"
					}`}>
					Ugent
				</Badge>
				<Badge
					variant="warning"
					className={`${
						productTitel.plan === "free"
							? "d-none"
							: "d-block" || productTitel.plan === "urgent"
							? "d-none"
							: "d-block" || productTitel.plan === "higlighted"
							? "d-none"
							: "d-block" || productTitel.plan === "Featured"
							? "d-block"
							: "d-none"
					}`}>
					}`}> Featured
				</Badge>
				<Badge
					variant="success"
					className={`${
						productTitel.plan === "free"
							? "d-none"
							: "d-block" || productTitel.plan === "uyarn start gent"
							? "d-none"
							: "d-block" || productTitel.plan === "featured"
							? "d-none"
							: "d-block" || productTitel.plan === "Higlighted"
							? "d-block"
							: "d-none"
					}`}>
					Higlighted
				</Badge>
			</div>
		</div>
	);
}

export default function AdviewSlide(props) {
	const [productImg, setProductImg] = useState(props);
	useEffect(() => {
		setProductImg(props);
		console.log(props.images);
	}, [props]);
	return (
		<div>
			<Card className="border-0">
				<Card.Header style={{ backgroundColor: "#76ba1b" }}>
					<b style={{ color: "white" }}> Ad</b>
				</Card.Header>
				<Card.Body>
					<ProductTitle {...productImg} />

					<div
						class="uk-position-relative uk-visible-toggle uk-dark"
						tabindex="-1"
						uk-slideshow="animation: pull"
						uk-slideshow="min-height: 100; max-height: 400">
					
								<ul uk-lightbox="animation: slide" class="uk-slideshow-items">
								{	props.images &&	props.images.map((data) => (
									<li>
										<a
											class="uk-cover-container uk-inline"
											href={`https://dev.bellefu.com/images/products/${props.slug}/${data}`}
											data-caption="Caption 1">
											<img
												src={`https://dev.bellefu.com/images/products/${props.slug}/${data}`}
												alt=""
												uk-cover
											/>
										</a>
									</li>
									))}
								</ul>
							

						<button
							class="uk-border-pill uk-button uk-button-default uk-button-small uk-position-center-left  "
							href="#"
							uk-slidenav-previous
							uk-slideshow-item="previous">
							<IoIosArrowDropleftCircle
								style={{ fontSize: "2em", color: "#ffa500" }}
							/>
						</button>
						<button
							class="uk-border-pill uk-button uk-border-remove uk-button-default uk-button-small  uk-position-center-right  "
							href="#"
							uk-slidenav-next
							uk-slideshow-item="next">
							<IoIosArrowDroprightCircle
								style={{ fontSize: "2em", color: "#ffa500" }}
							/>
						</button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
