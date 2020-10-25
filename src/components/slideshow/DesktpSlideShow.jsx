import React from "react";
import { Carousel, Card} from "react-bootstrap";
import DesktopInput from "./DesktopInput"
import banner from "../images/Bellefu_home_banner_1.png";

export default function DesktpSlideShow(props) {
	return (
		<div>
			<Carousel
				indicators={false}
				prevIcon={
					<span aria-hidden="true" className="carousel-contrl-prev-icon " />
				}
				nextIcon={
					<span aria-hidden="true" className="carousel-contrl-next-icon " />
				}
				className="d-none d-lg-block  ">
				<Carousel.Item interval={1000} style={{ height: "350px" }}>
					<img
						className="d-block w-100"
						src={banner}
						alt="First slide"
						style={{ height: "350px", objectFit: 'cover' }}
					/>
					<Carousel.Caption>
						<div style={{ marginTop: "-18%" }}>
							<h3 style={{ color: "white" }}>Bellefu - digital agro connect...</h3>
							<Card style={styles.from_card} className="border-0">
								< DesktopInput country={props.country} lga={props.lga} state={props.state} setModalShow={props.setModalShow} />
							</Card>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

const styles = {
	from_card: {
		height: "70px"
	},
};
