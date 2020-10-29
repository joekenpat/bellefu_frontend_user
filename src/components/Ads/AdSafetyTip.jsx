import Axios from "axios";
import React, { useState } from "react";
import { Card, Row, Col, Accordion, Button, Spinner, Form } from "react-bootstrap";
import { GiTrumpetFlag } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

export default function AdSafetyTip(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;
	const [loading, setLoading] = useState(false)
	const [show, setShow] = useState(true)
	const [reportBody, setReportBody] = useState({
		report_title: '',
		report_message: ''
	})

	const handleChange = (e) => {
		setReportBody({
			...reportBody,
			[e.target.name]: e.target.value
		})
	}
	
	const handleReport = (e) => {
		e.preventDefault()
		setShow(false)
		setLoading(true)
		if(!user.token) {
			props.history.push('/login')
		}
		Axios
			.post(`https://dev.bellefu.com/api/user/product/report/${props.data.slug}`, reportBody, {
				headers: {
					Authorization: user !== null ? `Bearer ${user.token}` : 'hfh',
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setShow(false)
				setLoading(false)
				
			})
			.catch((error) => {
				setShow(true)
				setLoading(false)
			});
	}
	return (
		<div>
			<Card className="border-0 ">
				<Card.Header
					className="border-0"
					style={{ backgroundColor: "#76ba1b" }}>
					<b style={{ color: "white" }}>Safety tips</b>
				</Card.Header>
				<Card.Body>
					<Row>
						<Col xm={12} sm={12} md={12} lg={12} xl={12} className=" mt-2">
							<div>
								<IoMdCheckmarkCircleOutline
									style={styles.icon}
									className="mr-1"
								/>{" "}
								<span style={styles.text}>
									Ensure quality/quantity of Products/Services.
								</span>
							</div>
						</Col>
						<Col xm={12} sm={12} md={12} lg={12} xl={12} className=" mt-2">
							<div>
								<IoMdCheckmarkCircleOutline
									style={styles.icon}
									className="mr-1"
								/>{" "}
								<span style={styles.text}>
									Ensure meeting in a secured place if the need arise.
								</span>
							</div>
						</Col>
						<Col xm={12} sm={12} md={12} lg={12} xl={12} className=" mt-2">
							<div>
								<IoMdCheckmarkCircleOutline
									style={styles.icon}
									className="mr-1"
								/>{" "}
								<span style={styles.text}>
									Contact support@bellefu.com if you require verification of
									buyer or seller (Terms & Conditions apply)
								</span>
							</div>
						</Col>
						<Col xm={12} sm={12} md={12} lg={12} xl={12} className=" mt-2">
							<div className="text-center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
								{show && (
									<Accordion>
											<Accordion.Toggle eventKey="1">
											
												<Button
													className="border-0"
													style={{
														color: 'black',
														fontSize: "0.9em",
														backgroundColor: "#EFEFEF",
														boxShadow: "none"
													}}>
													Report This Ad
												</Button>
											</Accordion.Toggle>
											<Accordion.Collapse eventKey="1">
												<Form onSubmit={handleReport}>
													<Form.Group controlId="formBasicEmail">
														<div className="mt-2">
														<Form.Control onChange={handleChange} name="report_title" value={reportBody.report_title} type="text" placeholder="Title" />
														</div>
														<div className="mt-2">
														<Form.Control onChange={handleChange} as="textarea" name="report_message" value={reportBody.report_message} placeholder="Description" />
														</div>
														<div className="mt-2">
														<Button
														onClick={handleReport}
														style={{backgroundColor: "#ffa500", color: 'white'}}
															className="border-0"
															>
																Submit Report
														</Button>
														</div>
													</Form.Group>
												</Form>
											</Accordion.Collapse>
									</Accordion>
									
								) 
							}
							{loading && (
								<Spinner animation="grow" />
							)}
							</div>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
}

const styles = {
	avater: {
		height: "100px"
	},
	icon: {
		color: "#ffa500",
		fontSize: "20px"
	},
	text: {
		fontSize: "13px"
	}
};
