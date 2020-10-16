import React from "react";

export default function Footer() {
	return (
		<div>
			<section className="footer" style={styles.footer}>
				<div className="container" style={{ paddingTop: "50px" }}>
					<div className="row footer-content" style={styles.footer_content}>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
										<li style={styles.list}>
											<p>My Account</p>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#about">
												Login
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#about">
												Register
											</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<ul>
										<li style={styles.list}>
											<p>Help & Support</p>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#about">
												Feed Back
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#about">
												Contact
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#about">
												Submit CV
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#about">
												Documentary
											</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<ul>
										<li style={styles.list}>
											<p>Information</p>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#about">
												About Us
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#">
												Countries
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#">
												Site Maps
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#">
												Legal
											</a>
										</li>
										<li style={styles.list}>
											<a style={styles.link} href="#policy">
												Privacy Policy
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- ******footer bottom --> */}
                    <hr class="uk-divider-icon"style={{opacity: "0.4"}} />

					<div className="footer-bottom">
						<h5 style={{color: "white" , opacity: "0.4"}}>2020 Bellefu Agro consult. All rights reserved.</h5>
					</div>
				</div>
			</section>
		</div>
	);
}

const styles = {
	footer: {
		backgroundColor: "#000000",
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
