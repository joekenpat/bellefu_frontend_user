import React from "react";
import { Badge, Card } from "react-bootstrap";
import pic from "../images/pic.jpg";
import land from "../images/land.PNG";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle
} from "react-icons/io";

// ====PRODUCT TITLE & TAGS====
function ProductTitle() {
	return (
		<div>
			{/* ===FOR DESKTOP VIEW=== */}
			<div
				className="d-none d-lg-block  d-md-none"
				style={{ marginBottom: "15px" }}>
				<span
					className="mb-5"
					style={{
						fontSize: "15px",
					
					}}>
					<b>Product Title</b>
				</span>
				<Badge variant="danger" className="ml-2">
					Ugent
				</Badge>
				<Badge style={{ color: "white" }} variant="warning" className="ml-2">
					Featured
				</Badge>
				<Badge variant="success" className="ml-2">
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
						fontSize: "15px",
					}}>
			<b>Product Title</b>
				</span>
				<Badge variant="danger" className="ml-2">
					Ugent
				</Badge>
				<Badge style={{ color: "white" }} variant="warning" className="ml-2">
					Featured
				</Badge>
				<Badge variant="success" className="ml-2">
					Higlighted
				</Badge>
			</div>
		</div>
	);
}


export default function AdviewSlide() {
	return (
		<div>
				<Card className="border-0">
					<Card.Header
						style={{ backgroundColor: "#76ba1b" }}>
						<b style={{ color: "white" }}> Ad</b>
					</Card.Header>
					<Card.Body>
					<ProductTitle  />
						<div
							class="uk-position-relative uk-visible-toggle uk-dark"
							tabindex="-1"
							uk-slideshow="animation: pull"
							uk-slideshow="min-height: 100; max-height: 400">
							<ul uk-lightbox="animation: slide" class="uk-slideshow-items">
								<li>
									<a
										class="uk-cover-container uk-inline"
										href={pic}
										data-caption="Caption 1">
										<img src={pic} alt="" uk-cover />
									</a>
								</li>
								<li>
									<a
										class="uk-cover-container uk-inline"
										href={land}
										data-caption="Caption 1">
										<img src={land} alt="" uk-cover />
									</a>
								</li>
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
