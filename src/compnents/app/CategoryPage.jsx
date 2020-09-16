import React from "react";
import { Card, Row, Col, Container, Accordion } from "react-bootstrap";
import Fillter from "../fillter/Fillter";
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";
import Items from "../fillter/Items";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";

export default function CategoryPage() {
	return (
		<div>
			<HeaderNav />
			<Container>
				<Row>
					<Col lg={3} md={12} xs={12} sm={12} style={{paddingLeft: "3px" , paddingRight: "3px"}}>
						<div style={{ marginTop: "100px" }}>
							<div className="d-none d-lg-block  d-md-none">
								<Fillter />
							</div>

							{/* ======FOR MOBILE FILLTER====== */}
							<div  className=" d-lg-none  d-xs-block d-sm-block d-mb-block ">
								<Accordion>
									<Accordion.Toggle 
										as={Card.Header}
										style={{ backgroundColor: "white" , marginLeft: "0px"}}
										eventKey="0">
										<Row type="button">
											<Col xs={2} sm={2}>
												<GiSettingsKnobs
													style={{ color: "#ffa500", fontSize: "30px" }}
												/>
											</Col>
											<Col xs={8} sm={8}>
												<label className="mr-1" style={{ fontSize: "0.9em" }}>
													<b style={{ opacity: "0.7" }}>Filter Search</b>
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
											<Fillter />
										</Card.Body>
									</Accordion.Collapse>
								</Accordion>
							</div>
						</div>
					</Col>
					<Col lg={9} md={12} xs={12} sm={12}>
						<div
							style={{ marginTop: "100px" }}
							className="d-none d-lg-block  d-md-none">
							<Items />
						</div>
						{/* =========FOR MOBILEVIEW======= */}
						<div
							style={{ marginTop: "15px" }}
							className="d-lg-none d-xs-block d-sm-block d-md-block">
							<Items />
						</div>
					</Col>
				</Row>
			</Container>
			<BottomNav />
		</div>
	);
}
