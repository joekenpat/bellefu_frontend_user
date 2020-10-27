import React from "react";
import { Accordion, Card } from "react-bootstrap";

export default function Footer() {
	return (
		<div>
			<section className="footer" style={styles.footer}>
				<div className="container" style={{ paddingTop: "50px" }}>
					<div className="row footer-content" style={styles.footer_content}>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block">
							<h3 style={styles.footerAbout}>ABOUT US</h3>

							<p style={{ opacity: "0.7" }}>
								Bellefu.com is a dynamic online marketplace dedicated to
								agriculture-related activities ensuring farmers, buyers, and
								sellers of agricultural products have direct contact with other
								agro-allied providers and manufacturing industries around the
								world. Bellefu is designed to make searching for agro products
								available at your fingertips.
							</p>
						</div>

						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<ul>
										<li className="d-block d-lg-none" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: 'black', color: 'white', border: 'none'}} eventKey="0">
														About
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
													<p className="pt-2" style={{ opacity: "0.7", color: '#c0c0c0' }}>
														Bellefu.com is a dynamic online marketplace dedicated to
														agriculture-related activities ensuring farmers, buyers, and
														sellers of agricultural products have direct contact with other
														agro-allied providers and manufacturing industries around the
														world. Bellefu is designed to make searching for agro products
														available at your fingertips.
													</p>
													</Accordion.Collapse>
											</Accordion>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<p>My Account</p>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="/signin">
												Login
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="/signup">
												Register
											</a>
										</li>
										<li className="d-block d-lg-none mt-2" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: 'black', color: 'white', border: 'none'}} eventKey="0">
														My Account
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
														<div className="pt-2">
															<a style={styles.link} href="/signin">
																Login
															</a>
															<a style={styles.link} href="/signup">
																Signup
															</a>
														</div>
													</Accordion.Collapse>
											</Accordion>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<ul>
										<li className="d-none d-lg-block" style={styles.list}>
											<p>Help & Support</p>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
												Feed Back
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
												Contact
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
												Submit CV
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
												Documentary
											</a>
										</li>
										<li className="d-block d-lg-none" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: 'black', color: 'white', border: 'none'}} eventKey="0">
														Help & Support
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
														<div className="pt-2">
															<a style={styles.link} href="#">
																Feedback
															</a>
															<a style={styles.link} href="#">
																Contact
															</a>
															<a style={styles.link} href="#">
																Submit CV
															</a>
															<a style={styles.link} href="#">
																Documentary
															</a>
														</div>
													</Accordion.Collapse>
											</Accordion>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<ul>
										<li className="d-none d-lg-block" style={styles.list}>
											<p>Information</p>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
												About Us
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#">
												Countries
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#">
												Site Maps
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#">
												Legal
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#policy">
												Privacy Policy
											</a>
										</li>
										<li className="d-block d-lg-none" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: 'black', color: 'white', border: 'none'}} eventKey="0">
														Information
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
														<div className="pt-2">
															<a style={styles.link} href="#">
																About Us
															</a>
															<a style={styles.link} href="#">
																Countries
															</a>
															<a style={styles.link} href="#">
																Site Map
															</a>
															<a style={styles.link} href="#">
																Legal
															</a>
															<a style={styles.link} href="#">
																Privacy Policy
															</a>
														</div>
													</Accordion.Collapse>
											</Accordion>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- ******footer bottom --> */}
                    <hr class="uk-divider-icon"style={{opacity: "0.4"}} />

					<div className="footer-bottom">
						<h5 className="d-none d-lg-block" style={{color: "white" , opacity: "0.4"}}>&copy; 2020 Bellefu Agro consult. All rights reserved.</h5>
						<h5 className="d-block d-lg-none" style={{color: "white" , opacity: "0.4", fontSize: '15px'}}>&copy; 2020 Bellefu Agro consult. All rights reserved.</h5>
					</div>
				</div>
			</section>
		</div>
	);
}

const styles = {
	footer: {
		backgroundColor: "#191a19",
		color: "#fff",
		paddingtop: "50px",
		paddingBottom: "20px"
	},
	footer_content: {
		textAlign: "left"
	},
	footerAbout: {
		fontSize: "32px",
		padding: "0px 0px 10px",
		fontWeight: "500",
		margin: "0",
		color: "#fff"
	},
	footer_p: {
		color: "#c0c0c0",
		fontSize: "16px",
		margin: "0px 0px 16px",
		lineHeight: "26px"
	},
	link: {
		color: "#c0c0c0",
		fontWeight: "600px",
		fontSize: "16px",
		display: "block",
		textAlign: "left",
		padding: "0",
		lineHeight: "2rem",
		textDecoration: "none",
		opacity: "0.7"
	},
	list: {
		textDecoration: "none",
		display: "block",
		textAlign: "left",
		padding: "0"
	}
};
