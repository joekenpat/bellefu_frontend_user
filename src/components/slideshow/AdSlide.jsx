import React from 'react'
import { Carousel, Card } from "react-bootstrap";
import banner from "../images/banner.png";

export default function AdSlide() {
    return (
        <div>
            
			<img
				className="d-block w-100"
				src={banner}
				alt="First slide"
				style={{ height: "200px" }}
			/>
				
        </div>
    )
}
