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




export default function LandingPageItem(props) {
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
			<MobileSlideShow country={props.userCountry} lga={lga} state={state} setModalShow={setModalShow}/>
			<Container style={{marginTop: '30px'}}>
				<Row>
					<Col xs={12} md={2}>
						<Card style={{marginTop: '80px'}} className="d-none d-lg-block ">
							<MainDesktop />
						</Card>
					</Col>
					<Col xs={12} md={7}>
						
						<div className="d-lg-none d-sm-block d-md-block">
							<MobileCategory {...props} />
						</div>
						<div className="mt-5 mt-md-0">
							<Row>
								<Col xs={6}>
									<h4 className="mb-5 ml-2">Trending Ads</h4>
								</Col>
							</Row>
							<PremiunAds {...props} country={country} user={user}/>
						</div>

					</Col>
					<Col xs={12} lg={3}>

						<div style={{marginTop: '70px'}} className="d-none d-lg-block ">
							<div className="p-2">
								<AdSlide />
							</div>
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
