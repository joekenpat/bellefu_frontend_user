import React from 'react'
import { Carousel, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function AdSlide() {
    return (
        <div>
			<Link to="#">
				<div>
				
				<img
					className="d-block w-100"
					src="https://dev.bellefu.com/images/misc/bellefu1.jpeg"
					alt="First slide"
					style={{ height: "200px" }}
				/>
			
			</div>
			</Link>
			<Link to="#">

			<div className="mt-4">
            
				<img
					className="d-block w-100"
					src="https://dev.bellefu.com/images/misc/bellefu2.jpeg"
					alt="First slide"
					style={{ height: "200px" }}
				/>
				
        	</div>
			</Link>
			<Link to="#">

			<div className="mt-4">
            
			<img
				className="d-block w-100"
				src="https://dev.bellefu.com/images/misc/bellefu3.jpeg"
				alt="First slide"
				style={{ height: "200px" }}
			/>
			
			</div>
			</Link>
			<Link to="#">

			<div className="mt-4">
            
			<img
				className="d-block w-100"
				src="https://dev.bellefu.com/images/misc/bellefu4.jpeg"
				alt="First slide"
				style={{ height: "200px" }}
			/>
			
			</div>
			</Link>
		</div>
    )
}
