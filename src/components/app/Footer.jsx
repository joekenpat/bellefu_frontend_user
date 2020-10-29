import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import Cookie from 'js-cookie'
import Axios from "axios";

const {Translate} = require('@google-cloud/translate').v2;

export default function Footer() {
	const [id, setId] = useState('')
	const [language, setLanguage] = useState(Cookie.get('language' || 'en'))
	const translate = new Translate({key: id})
    const [text, setText] = useState([
		'About Us',
		'Bellefu.com is a dynamic online marketplace dedicated to agriculture-related activities ensuring farmers, buyers, and sellers of agricultural products have direct contact with other agro-allied providers and manufacturing industries around the world. Bellefu is designed to make searching for agro products available at your fingertips.',
		'My Account',
		'Login',
		'Register',
		'Help & Support',
		'Feedback',
		'Contact',
		'Submit CV',
		'Documentary',
		'Information',
		'About Us',
		'Countries',
		'Site Map',
		'Legal',
		'Privacy Policy',
		'Bellefu Agro consult. All rights reserved.'
	])
	
	const [originalText, setOriginalText] = useState([
		'About Us',
		'Bellefu.com is a dynamic online marketplace dedicated to agriculture-related activities ensuring farmers, buyers, and sellers of agricultural products have direct contact with other agro-allied providers and manufacturing industries around the world. Bellefu is designed to make searching for agro products available at your fingertips.',
		'My Account',
		'Login',
		'Register',
		'Help & Support',
		'Feedback',
		'Contact',
		'Submit CV',
		'Documentary',
		'Information',
		'About Us',
		'Countries',
		'Site Map',
		'Legal',
		'Privacy Policy',
		'Bellefu Agro consult. All rights reserved.'
	])
	
	const load = async () => {
		await Axios.get("https://dev.bellefu.com/api/config/api_key/google_translate")
		.then((res) => {
			setId(res.data.key)
		})
	}

	const trans = async() => {
		const translate = await new Translate({key: id})
		if(language === 'en' || id.length < 2){
			setText(originalText)
		} else {

			translate.translate(text, language)
				.then((res) => {
					setText(res[0])
				
			}).catch(() => {
				setText(originalText)
				})
		}
	}
	  
	useEffect( () => {
		trans()
	}, [id, language])
 
	useEffect(() => {
		load()
	}, [])

	return (
		<div>
			<section className="footer" style={styles.footer}>
				<div className="container" style={{ paddingTop: "50px" }}>
					<div className="row footer-content" style={styles.footer_content}>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block">
							<h3 style={styles.footerAbout}>{text[0]}</h3>

							<p style={{ opacity: "0.7" }}>
							{text[1]}
							</p>
						</div>

						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<ul>
										<li className="d-block d-lg-none" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: '#191a19', color: 'white', border: 'none'}} eventKey="0">
													{text[0]}
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
													<p className="pt-2" style={{ opacity: "0.7", color: '#c0c0c0' }}>
													{text[1]}
													</p>
													</Accordion.Collapse>
											</Accordion>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<p>{text[2]}</p>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="/signin">
											{text[3]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="/signup">
											{text[4]}
											</a>
										</li>
										<li className="d-block d-lg-none mt-2" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: '#191a19', color: 'white', border: 'none'}} eventKey="0">
													{text[2]}
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
														<div className="pt-2">
															<a style={styles.link} href="/signin">
															{text[3]}
															</a>
															<a style={styles.link} href="/signup">
															{text[4]}
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
											<p>{text[5]}</p>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
											{text[6]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
											{text[7]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
											{text[8]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
											{text[9]}
											</a>
										</li>
										<li className="d-block d-lg-none" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: '#191a19', color: 'white', border: 'none'}} eventKey="0">
														{text[5]}
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
														<div className="pt-2">
															<a style={styles.link} href="#">
															{text[6]}
															</a>
															<a style={styles.link} href="#">
															{text[7]}
															</a>
															<a style={styles.link} href="#">
															{text[8]}
															</a>
															<a style={styles.link} href="#">
															{text[9]}
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
											<p>{text[10]}</p>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#about">
											{text[11]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#">
											{text[12]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#">
											{text[13]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#">
											{text[14]}
											</a>
										</li>
										<li className="d-none d-lg-block" style={styles.list}>
											<a style={styles.link} href="#policy">
											{text[15]}
											</a>
										</li>
										<li className="d-block d-lg-none" style={styles.list}>
											<Accordion>
													<Accordion.Toggle style={{backgroundColor: '#191a19', color: 'white', border: 'none'}} eventKey="0">
													{text[10]}
													</Accordion.Toggle>
													<Accordion.Collapse eventKey="0">
														<div className="pt-2">
															<a style={styles.link} href="#">
															{text[11]}
															</a>
															<a style={styles.link} href="#">
															{text[12]}
															</a>
															<a style={styles.link} href="#">
															{text[13]}
															</a>
															<a style={styles.link} href="#">
															{text[14]}
															</a>
															<a style={styles.link} href="#">
															{text[15]}
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
						<h5 className="d-none d-lg-block" style={{color: "white" , opacity: "0.4"}}>&copy; 2020 {text[16]}</h5>
						<h5 className="d-block d-lg-none" style={{color: "white" , opacity: "0.4", fontSize: '15px'}}>&copy; 2020 {text[16]}</h5>
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
