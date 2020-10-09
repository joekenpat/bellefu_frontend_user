import React from 'react'
import { Carousel, Card } from "react-bootstrap";
import banner from "../images/banner.png";

export default function AdSlide() {
    return (
        <div>
            <Card>
            	<Carousel
				indicators={true}
				prevIcon={
					<span aria-hidden="true" className="carousel-contrl-prev-icon " />
				}
				nextIcon={
					<span aria-hidden="true" className="carousel-contrl-next-icon " />
				}
				className="d-none d-lg-block  ">
				<Carousel.Item interval={1000} style={{ height: "200px" }}>
					<img
						className="d-block w-100"
						src={banner}
						alt="First slide"
						style={{ height: "200px" }}
					/>
				</Carousel.Item>
			</Carousel>
            </Card>
        </div>
    )
}
