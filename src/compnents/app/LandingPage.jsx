import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";
import MainDesktop from "../categories/MainDesktop";
import DesktopSlideShow from "../slideshow/DesktpSlideShow";
import MobileSlideShow from "../slideshow/MobileSlideShow";
import AdSlide from "../slideshow/AdSlide";
import PremiunAds from "../Ads/PremiunAds";
import LatestAd from "../Ads/LatestAd";
import MobileCategory from "../categories/MobileCategory";

export default function LandingPage() {
	return (
		<div>
			<HeaderNav />
			<DesktopSlideShow />
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
							<h4 className="mb-5">Premium Ad</h4>
							<PremiunAds />
						</div>
						<div className="mt-5">
							<h4 className="mb-5">Latest Ad</h4>
							<LatestAd />
						</div>
					</Col>
				</Row>
			</Container>

			<BottomNav />
		</div>
	);
}

