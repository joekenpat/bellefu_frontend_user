import React, { useState, useEffect } from "react";
import { Badge, Card } from "react-bootstrap";

import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle
} from "react-icons/io";
import ProductTitle from "./ProductTitle";

// ====PRODUCT TITLE & TAGS====


export default function AdviewSlide(props) {
	const [productImg, setProductImg] = useState(props);
	const [product, setProduct] = useState({})
	useEffect(() => {
		setProductImg(props);
	}, [props]);

	useEffect(() => {
		setProduct(props.data)
	}, [props.data])
	return (
		<div>
			<Card className="border-0">
				<Card.Header style={{ backgroundColor: "#76ba1b" }}>
					<b style={{ color: "white" }}> Ad</b>
				</Card.Header>
				<Card.Body>
					<ProductTitle id={props.id} language={props.language} data={product} {...productImg} />

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
											href={`https://bellefu.com/images/products/${props.slug}/${data}`}
											data-caption="Caption 1">
											<img
												src={`https://bellefu.com/images/products/${props.slug}/${data}`}
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
