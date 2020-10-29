import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";
import { AiFillPhone, AiFillEye } from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Moment from "react-moment";
import renderHTML from "react-render-html"
const {Translate} = require('@google-cloud/translate').v2;


function AdDetails(props) {
	const [productsDataDetail, setProductsDataDetail] = useState(props);
	const [text, setText] = useState([
        'Ad Details',
		'Location',
		props.address,
		'Price',
		'Posted',
		'Ad Views',
		'Ad',
		props.slug,
		'Ad Description',
		
		
    ])
    const [originalText, setOriginalText] = useState([
        'Ad Details',
		'Location',
		props.address,
		'Price',
		'Posted',
		'Ad Views',
		'Ad',
		props.slug,
		'Ad Description',
		
    ])


	useEffect(() => {
		setProductsDataDetail(props);
		setText([
            'Ad Details',
			'Location',
			props.address,
			'Price',
			'Posted',
			'Ad Views',
			'Ad',
			props.slug,
		'Ad Description',
		
        ])
        setOriginalText([
            'Ad Details',
			'Location',
			props.address,
			'Price',
			'Posted',
			'Ad Views',
			'Ad',
			props.slug,
		'Ad Description',
		
        ])
	}, []);

	const trans = async() => {
		const translate = await new Translate({key: props.id})
		if(props.language === 'en'){
			setText(originalText)
		} else {

			translate.translate(text, props.language)
				.then((res) => {
					setText(res[0])
				
			}).catch(() => {
				setText(originalText)
				})
		}
	}
	  
	useEffect( () => {
		trans()
    }, [props.id])

	return (
		<div>
			<Row>
				<Col>
					<Card className="border-0">
						<Card.Header
							className="border-0"
							style={{ backgroundColor: "#76ba1b" }}>
							<b style={{ color: "white" }}>{text[0]}</b>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<MdLocationOn style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>{text[1]}</b>
										</span>
									</div>
									<p className="ml-5">{text[2]}</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<GiReceiveMoney style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>{text[3]}</b>
										</span>
									</div>
									<p className="ml-5 ">
										{productsDataDetail.currency_symbol}
										{productsDataDetail.price}
									</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<IoIosTime style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>{text[4]}</b>
										</span>
									</div>
									<p className="ml-5">
										<Moment format="D MMM YYYY" withTitle>
											{productsDataDetail.created_at}
										</Moment>
									</p>
								</Col>
								
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<AiFillEye style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>{text[5]}</b>
										</span>
									</div>
									<p className="ml-5">{productsDataDetail.inorganic_views}</p>
								</Col>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<div className="mt-3">
										<FaSlackHash style={styles.icon} className="mr-3" />{" "}
										<span style={styles.text}>
											<b>{text[6]}</b>
										</span>
									</div>
									<p className="ml-5 ">{text[7]}</p>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className="border-0 mt-4">
						<Card.Header
							className="border-0"
							style={{ backgroundColor: "#76ba1b" }}>
							<b style={{ color: "white" }}>{text[8]}</b>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xm={12} sm={12} md={12} lg={6} xl={6}>
									<span style={styles.text}>	
									`{renderHTML(`${props.description}`)}`
									</span>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

const styles = {
	icon: {
		color: "#ffa500",
		fontSize: "30px"
	},
	text: {
		fontSize: "15px"
	}
};

export default AdDetails;
