import React from "react";
import { Container, Card, Col, Row} from "react-bootstrap";
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";
import MainDesktop from "../categories/MainDesktop";
import DesktopSlideShow from "../slideshow/DesktpSlideShow";
import MobileSlideShow from "../slideshow/MobileSlideShow";
import AdSlide from "../slideshow/AdSlide";
import PremiunAds from "../Ads/PremiunAds";
import LatestAd from "../Ads/LatestAd";
import MobileCategory from "../categories/MobileCategory";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import { useSelector } from "react-redux";

import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import MyVerticallyCenteredModal from "../Ads/StateModal";




export default function LandingPage(props) {
	const [modalShow, setModalShow] = React.useState(false);
	const userSignin = useSelector((state) => state.userSignin);
	const userCountry = useSelector((state) => state.userCountry);
	const [states, setStates] = useState([])
	const [state, setState] = useState({})
	const [lgas, setLgas] = useState([])
	const [lga, setLga] = useState({})
	const { user } = userSignin;
	const country = userCountry;

	useEffect(() => {
		Axios.get(`https://dev.bellefu.com/api/${country.country_iso2}/state/list`)
		.then((res) => {
			setStates(res.data.states)
		}).catch((e) => {
			console.log('an error occured: ', e)
		})
	}, [])

	return (
		<div>
			<HeaderNav />
			<DesktopSlideShow country={props.userCountry} lga={lga} state={state} setModalShow={setModalShow} />
			<MobileSlideShow />
			<Container>
				<Row>
					<Col md={4} lg={4} xl={4}>
						<Card className="mt-3 d-none d-lg-block ">
							<MainDesktop />
						</Card>
					</Col>
					<Col md={12} lg={8} xl={8}>
						<div className="mt-3 d-none d-lg-block ">
							<Card className="border-0">
								<div className="p-2">
									<AdSlide />
								</div>
							</Card>
						</div>
						<div className="mt-2 d-lg-none d-sm-block d-md-block">
							<MobileCategory />
						</div>
						<div className="mt-5">
							<Row>
								<Col xs={12} sm={12} md={6} lg={6} xl={6}>
									<h4 className="mb-5">Premium Ad</h4>
								</Col>
								<Col xs={12} sm={12} md={6} lg={6} xl={6}>
									<Link to="/product_list?plan=featured" className="d-flex flex-row-reverse" style={{ color: "inherit", textDecoration: "inherit" }}>
										<p style={{ color: "#ffa500" }}>
										View More<BsArrowRight/>
										</p>
									</Link>
								</Col>
							</Row>
							<PremiunAds country={country} user={user}/>
						</div>
						<div className="mt-5">
							<Row>
								<Col xs={12} sm={12} md={6} lg={6} xl={6}>
									<h4 className="mb-5">Latest Ad</h4>
								</Col>
								<Col xs={12} sm={12} md={6} lg={6} xl={6}>
									<Link to="/product_list" className="d-flex flex-row-reverse" style={{ color: "inherit", textDecoration: "inherit" }}>
										<p style={{ color: "#ffa500" }}>
											View More<BsArrowRight/>
										</p>
									</Link>
								</Col>
							</Row>
							<LatestAd country={country} user={user} />
						</div>
					</Col>
				</Row>
				<MyVerticallyCenteredModal
					country={props.userCountry}
					states={states}
					show={modalShow}
					lgas={lgas}
					setLgas={setLgas}
					setLga={setLga}
					state={state}
					setState={setState}
					onHide={() => setModalShow(false)}
				/>
			</Container>

			<BottomNav />
		</div>
	);
}
