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
import { useLocation, withRouter } from "react-router-dom";

export default function AdViewPage(props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [productsDataDetail, setproductsDataDetail] = useState({});
	let url = "https://dev.bellefu.com/api/product/show";

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
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<div style={{ marginTop: "10%" }} className="d-none d-lg-block  d-md-none">
						<AdviewSlide {...productsDataDetail}/>
					</div>
					{/* ===FOR MOBILE VIEW=== */}
					<div style={{ marginTop: "30%" }} className=" d-lg-none  d-xs-block d-sm-block d-md-block ">
						<AdviewSlide {...productsDataDetail}/>
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={8} xl={8}>
					<div style={{ marginTop: "5%" }}>
					<AdDetails {...productsDataDetail}/>	
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={4} xl={4}>
					<Row>
				   <Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<div style={{ marginTop: "10%" }}>
						<UserAdInfo  {...productsDataDetail}/>
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<div style={{ marginTop: "10%" }}>
						<AdSafetyTip/>
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
