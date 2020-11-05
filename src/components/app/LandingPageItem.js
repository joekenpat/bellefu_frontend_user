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
	const [id, setId] = useState('')

	const { user } = userSignin;
	const country = userCountry;

	const load = async () => {
		await Axios.get("https://bellefu.com/api/config/api_key/google_translate")
		.then((res) => {
			setId(res.data.key)
		})
	}
	

	useEffect(() => {
		Axios.get(`https://bellefu.com/api/${country.country_iso2}/state/list`)
		.then((res) => {
			setStates(res.data.states)
		}).catch((e) => {
			console.log('an error occured: ', e)
		})
		load()
	}, [])

	return (
		<div>
			<HeaderNav />
			<div className="d-none d-lg-block">
			<DesktopSlideShow id={id} country={props.userCountry} lga={lga} state={state} setModalShow={setModalShow} />
			</div>
			<div className="d-block d-lg-none">
			<MobileSlideShow id={id} country={props.userCountry} lga={lga} state={state} setModalShow={setModalShow}/>
			</div>
			<Container style={{marginTop: '30px'}}>
				<Row>
					<Col xs={12} md={2}>
						<Card style={{marginTop: '80px' }} className="d-none d-lg-block ">
							<MainDesktop id={id} />
						</Card>
					</Col>
					<Col xs={12} md={7}>
						
						<div className="d-lg-none d-sm-block d-md-block">
							<MobileCategory id={id} {...props} />
						</div>
						<div className="mt-5 mt-md-0">
							<Row>
								<Col xs={6}>
									<h4 className="mb-5 ml-2 d-none d-sm-block">Trending Ads</h4>
									<h4 style={{fontSize: '20px'}} className="mb-5 ml-2 d-block d-sm-none">Trending Ads</h4>
								</Col>
							</Row>
							<PremiunAds id={id} {...props} country={country} user={user}/>
						</div>

					</Col>
					<Col xs={12} lg={3}>

						<div style={{marginTop: '70px',}} className="d-none d-lg-block ">
							<div>
								<AdSlide id={id} />
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
