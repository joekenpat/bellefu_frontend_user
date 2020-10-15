import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { withRouter, Link, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PostAdPayment() {
	let location = useLocation();

	const [paymentData, setPaymentData] = useState({
		product_slug: `${location.state.product_slug}`,
		upgrade_plan:`${location.state.product_plan}`,
		payment_channel: "",
		voucher_code: "",
		gateway_provider: ""
	});
	const [voucherShow, setVoucherShow] = useState(true);
	const [cardShow, setCardShow] = useState(true);

	const showVoucherInput = () => {
		setVoucherShow(false);
	};
	const showCardInput = () => {
		setCardShow(false);
	};

	//     product_slug = `${location.state.product_slug}`
	// 	upgrade_plan = `${location.state.product_plan}`
	// const {
	// 	product_slug,
	// 	upgrade_plan
	// } = paymentData

	//ONCHANGE FOR IMAGE
	const onChangHandler = (e) => {
		setPaymentData({ ...paymentData,  [e.target.name]: e.target.value });
	};

	//GLOBAL STATE FROM REDUX
	const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;
	const onSubmitHandle = (e) => {
		e.preventDefault();
		let url = "https://dev.bellefu.com/api/user/product/upgrade";
		axios
			.post(url, paymentData,  {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {})
			.catch((error) => {
				console.log(error);
			});
			console.log(paymentData)
	};

	useEffect(() => {
	
	});

	return (
		<div>
			<Container>
				<Form onSubmit={onSubmitHandle}>
					<Card className="border-0">
						<Card.Header
							className="border-0"
							style={{ backgroundColor: "#76ba1b" }}>
							<b style={{ color: "white" }}>Choose Payment Method </b>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xm={4} sm={4} md={4} lg={4} xl={4}>
									<Form.Check type="radio">
										<Form.Check.Input
											value="wallet"
											id="payment_channel_wallet"
											name="payment_channel"
											type="radio"
											onChange={(e) => onChangHandler(e)}
										/>
										<Form.Check.Label
											style={{ opacity: "0.4", fontSize: "0.8em" }}>
											<b>WALLET: {user.user.profile.wallet_balance}</b>
										</Form.Check.Label>
									</Form.Check>
								</Col>
								<Col xm={4} sm={4} md={4} lg={4} xl={4}>
									<Form.Check type="radio">
										<Form.Check.Input
											value="voucher"
											id="payment_channel_voucher"
											name="payment_channel"
											type="radio"
											onChange={(e) => onChangHandler(e)}
											onClick={showVoucherInput}
										/>
										<Form.Check.Label
											style={{ opacity: "0.4", fontSize: "0.8em" }}>
											<b>VOUCHER</b>
										</Form.Check.Label>
									</Form.Check>

									<input
										class="uk-input "
										type="text"
										style={styles.input}
										disabled={voucherShow}
										name="voucher_code"
										placeholder="Enter Voucher code"
										onChange={(e) => onChangHandler(e)}
									/>
								</Col>
								<Col xm={4} sm={4} md={4} lg={4} xl={4}>
									<Form.Check type="radio">
										<Form.Check.Input
											value="card"
											id="payment_channel_card"
											name="payment_channel"
											type="radio"
											onChange={(e) => onChangHandler(e)}
											onClick={showCardInput}
										/>
										<Form.Check.Label
											style={{ opacity: "0.4", fontSize: "0.8em" }}>
											<b>CARD</b>
										</Form.Check.Label>
									</Form.Check>
									<select
										class="uk-select"
										name="gateway_provider"
										onChange={(e) => onChangHandler(e)}
										disabled={cardShow}>
										<option>---select category---</option>
										<option value="paystack">Paystack</option>
									</select>
								</Col>
							</Row>

							<Button style={styles.btnSubmit} variant="warning" size="sm"
							onClick={onSubmitHandle}
							>
								Proccess
							</Button>
						</Card.Body>
					</Card>
				</Form>
			</Container>
		</div>
	);
}

const styles = {
	input: {
		boxShadow: "none"
	},
	btnSubmit: {
		marginTop: "30px",
		backgroundColor: "#ffa500",
		border: "none",
		color: "white",
		fontSize: "17px",
		width: "100px",
		height: "40px"
	}
};
