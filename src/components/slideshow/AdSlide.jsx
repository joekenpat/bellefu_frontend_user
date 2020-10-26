import React from 'react'
import { Carousel, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import banner from "../images/banner.png";
import bellefu1 from '../images/bellefu-external-ad-1.jpeg'
import bellefu2 from '../images/bellefu-external-ad-2.jpeg'
import bellefu3 from '../images/bellefu-external-ad-3.jpeg'
import bellefu4 from '../images/bellefu-external-ad-4.jpeg'

export default function AdSlide() {
    return (
        <div>
			<Link to="#">
				<div>
				
				<img
					className="d-block w-100"
					src={bellefu1}
					alt="First slide"
					style={{ height: "200px" }}
				/>
			
			</div>
			</Link>
			<Link to="#">

			<div className="mt-4">
            
				<img
					className="d-block w-100"
					src={bellefu2}
					alt="First slide"
					style={{ height: "200px" }}
				/>
				
        	</div>
			</Link>
			<Link to="#">

			<div className="mt-4">
            
			<img
				className="d-block w-100"
				src={bellefu3}
				alt="First slide"
				style={{ height: "200px" }}
			/>
			
			</div>
			</Link>
			<Link to="#">

			<div className="mt-4">
            
			<img
				className="d-block w-100"
				src={bellefu4}
				alt="First slide"
				style={{ height: "200px" }}
			/>
			
			</div>
			</Link>
		</div>
    )
}
