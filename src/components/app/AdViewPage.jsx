import React,{ useState, useEffect } from "react";
import { Col, Row, Container} from "react-bootstrap";
import AdDetails  from "../Ads/AdDetails"
import UserAdInfo from "../user/UserAdInfo"
import AdviewSlide from "../slideshow/AdviewSlide";
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";
import AdSafetyTip from "../Ads/AdSafetyTip"
import Preloader from "../user/Preloader";
import axios from "axios";
import Cookie from 'js-cookie'


export default function AdViewPage(props) {
	const [loading, setLoading] = useState(true);
	const [id, setId] = useState('')

	const [error, setError] = useState("");
	const [productsDataDetail, setproductsDataDetail] = useState({});
	const [language, setLanguage] = useState(Cookie.get('language' || 'en'))

	let url = "https://dev.bellefu.com/api/product/show";

	const load = async () => {
		await axios.get("https://dev.bellefu.com/api/config/api_key/google_translate")
		.then((res) => {
			setId(res.data.key)
		})
	}

	useEffect(() => {
		load()
	}, [])

	useEffect(() => {
		axios
			.get(`${url}/${props.match.params.id}`, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setLoading(false);
				setproductsDataDetail(res.data.product);
				setError("");
			})
			.catch((error) => {
				setLoading(false);
				setError("Something went worng");
				console.log(error);
			});
	}, [productsDataDetail != null && productsDataDetail.length < 1]);
	
	return (
		<div>
		
			<HeaderNav />
			<Container>
			{loading ? (
					<div style={{height: '100vh', width: '100%'}}>
						<Preloader />
					</div>
				) : (
			<Row>
				<Col xs={{ order: 1 }} lg={{ order: 1 }} xs={12} sm={12} md={12} lg={12} xl={12}>
					<div style={{ marginTop: "10%" }} className="d-none d-lg-block  d-md-none">
						<AdviewSlide id={id} language={language} data={productsDataDetail} language={language} {...productsDataDetail}/>
					</div>
					{/* ===FOR MOBILE VIEW=== */}
					<div style={{ marginTop: "30%" }} className=" d-lg-none  d-xs-block d-sm-block d-md-block ">
						<AdviewSlide id={id} language={language} data={productsDataDetail} language={language} {...productsDataDetail}/>
					</div>
				</Col>
				<Col xs={{ order: 3 }} lg={{ order: 2 }} xs={12} sm={12} md={12} lg={8} xl={8}>
					<div style={{ marginTop: "5%" }}>
					<AdDetails id={id} language={language} data={productsDataDetail} language={language}/>	
					</div>
				</Col>
				<Col xs={{ order: 2 }} lg={{ order: 3 }} xs={12} sm={12} md={12} lg={4} xl={4}>
					<Row>
				   <Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<div style={{ marginTop: "10%" }}>
						<UserAdInfo id={id} language={language} data={productsDataDetail} language={language}  {...productsDataDetail}/>
					</div>
				</Col>
				<Col xs={{ order: 4 }} lg={{ order: 4 }} xs={12} sm={12} md={12} lg={12} xl={12}>
					<div style={{ marginTop: "10%" }}>
						<AdSafetyTip id={id} language={language} language={language} data={productsDataDetail}/>
					</div>
				</Col>
					</Row>
				</Col>
			</Row>
				)}
			</Container>

			<BottomNav />
		</div>
	);
}
