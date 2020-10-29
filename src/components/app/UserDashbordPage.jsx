import React, { useState } from "react";
import DashboradInfo from "../user/DashboradInfo";
import DashBoardNav from "../user/DashBoardNav";
import ProfileForm from "../user/ProfileForm"
import { Col, Row, Container, Accordion, Card } from "react-bootstrap";
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import Cookie from 'js-cookie'

export default function UserDashbordPage() {
	const [language, setLanguage] = useState(Cookie.get('language' || 'en'))

	return (
		<div>
			<HeaderNav />
			<Container>
				<Row>
					<Col xs={12} sm={12} md={12} lg={3} xl={3}>
						<div className="d-none d-lg-block  d-md-none">
							<h3
								style={{
									marginTop: "33%",
									marginBottom: "20px",
									opacity: "0.5"
								}}>
								Dashboard
							</h3>
							<DashBoardNav language={language} />
						</div>
						{/* ======FOR MOBILE DASHBOARDNAV====== */}
						<div className=" d-lg-none  d-xs-block d-sm-block d-md-block ">
							<h3
								style={{
									marginTop: "30%",
									marginBottom: "20px",
									opacity: "0.5",
									fontSize: "20px"
								}}>
								Dashboard
							</h3>
							<Accordion>
								<Accordion.Toggle
									as={Card.Header}
									style={{ backgroundColor: "white", marginLeft: "0px" }}
									eventKey="0">
									<Row type="button">
										<Col xs={2} sm={2}>
											<AiOutlineMenu
												style={{ color: "#ffa500", fontSize: "30px" }}
											/>
										</Col>
										<Col xs={8} sm={8}>
											<label className="mr-1" style={{ fontSize: "0.9em" }}>
												<b style={{ opacity: "0.7" }}>Dashboard Navigation</b>
											</label>
										</Col>
										<Col xs={2} sm={2}>
											<IoMdArrowDropdown
												style={{ color: "#ffa500", fontSize: "30px" }}
											/>
										</Col>
									</Row>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<DashBoardNav language={language} />
									</Card.Body>
								</Accordion.Collapse>
							</Accordion>
						</div>
					</Col>

					<Col xs={12} sm={12} md={12} lg={9} xl={9}>
						<div
							style={{ marginTop: "17.7%" }}
							className="d-none d-lg-block  d-md-none">
							<DashboradInfo language={language} />
						</div>
						{/* ======FOR MOBILE VIEW======== */}
						<div
							style={{ marginTop: "5%" }}
							className=" d-lg-none  d-xs-block d-sm-block d-md-block ">
							<DashboradInfo language={language} />
						</div>
						
						<div className="mt-3">
							<ProfileForm language={language}/>
						</div>
					</Col>
				</Row>
			</Container>
			<BottomNav />
		</div>
	);
}
