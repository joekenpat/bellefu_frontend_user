import React from "react";
import { ListGroup, Row, Col, Image, Accordion, Card } from "react-bootstrap";
import agro_tools from "../images/agro_tools.png";
import { IoMdArrowDropright } from "react-icons/io";

//==========THIS COMPONENT ONLY SHOWS ON DESKTP VIEW =========//
//==========THIS COMPONENT IS ALL SO MAKING USE OF UIKIT FOR DROP DOWN RIGHT CENTER, WICH I ADDED THROUGH CDN =======//
export default function MainDesktop() {
	return (
		<div >
			{/* =======THIS IS FOR AGRICULTURAL TOOLS====== */}
			<Accordion >
				<Card className="border-0">
					<Accordion.Toggle as={Card.Header} style={{backgroundColor: "white"}} eventKey="0">
					<Row type="button">
								<Col sm={2}>
									<Image src={agro_tools}   roundedCircle />
								</Col>
								<Col sm={8}>
									<label className="mr-1" style={{ fontSize: "0.9em" }}>
										Agricultural Tools
									</label>
								</Col>
								<Col sm={2}>
									<IoMdArrowDropright
										style={{ color: "#ffa500", fontSize: "50px" }}
									/>
								</Col>
							</Row>
					</Accordion.Toggle>

					{/* =============SUB CATRGOTY=============== */}
					<Accordion.Collapse eventKey="0">
					<Card.Body >
					<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>
										Harvesting Mechinery
									</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
					</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card className="border-0">
					<Accordion.Toggle as={Card.Header} style={{backgroundColor: "white"}} eventKey="1">
					<Row type="button">
								<Col sm={2}>
									<Image src={agro_tools} roundedCircle />
								</Col>
								<Col sm={8}>
									<label className="mr-1" style={{ fontSize: "0.9em" }}>
										Agricultural Tools
									</label>
									{/* <div style={{ marginTop: "-35px" }}>
								<br />
							</div>
							<label
								style={{
									fontSize: "0.9em",
									opacity: "0.5",
									marginBottom: "-0px"
								}}>
								20,00ads
							</label> */}
								</Col>
								<Col sm={2}>
									<IoMdArrowDropright
										style={{ color: "#ffa500", fontSize: "30px" }}
									/>
								</Col>
							</Row>
					</Accordion.Toggle>

					{/* =============SUB CATRGOTY=============== */}
					<Accordion.Collapse eventKey="1">
					<Card.Body >
					<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>
										Harvesting Mechinery
									</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
					</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card className="border-0">
					<Accordion.Toggle as={Card.Header} style={{backgroundColor: "white"}} eventKey="2">
					<Row type="button">
								<Col sm={2}>
									<Image src={agro_tools} roundedCircle />
								</Col>
								<Col sm={8}>
									<label className="mr-1" style={{ fontSize: "0.9em" }}>
										Agricultural Tools
									</label>
									{/* <div style={{ marginTop: "-35px" }}>
								<br />
							</div>
							<label
								style={{
									fontSize: "0.9em",
									opacity: "0.5",
									marginBottom: "-0px"
								}}>
								20,00ads
							</label> */}
								</Col>
								<Col sm={2}>
									<IoMdArrowDropright
										style={{ color: "#ffa500", fontSize: "30px" }}
									/>
								</Col>
							</Row>
					</Accordion.Toggle>

					{/* =============SUB CATRGOTY=============== */}
					<Accordion.Collapse eventKey="2">
					<Card.Body >
					<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>
										Harvesting Mechinery
									</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
								<ListGroup.Item>
									<label style={{ fontSize: "0.9em" }}>Tractors</label>
									<div style={{ marginTop: "-38px" }}>
										<br />
									</div>
									<label
										style={{
											fontSize: "0.9em",
											opacity: "0.5",
											marginBottom: "-0px"
										}}>
										20,00 ads
									</label>
								</ListGroup.Item>
					</Card.Body>
					</Accordion.Collapse>
				</Card>
				
			</Accordion>




			
		</div>
	);
}
