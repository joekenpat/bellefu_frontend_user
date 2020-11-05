import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Preloader from "./Preloader";
import { PaystackButton } from "react-paystack";

function makeid(length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }

export default function PostAdPayment(props) {
	let location = useLocation();
	const [success, setSuccess] = useState()
	const [loading, setLoading] = useState();
	const [fee, setFee] = useState({})
	const [paymentData, setPaymentData] = useState({
		payment_channel: "",
		voucher_code: "",
		gateway_provider: ""
	});
	const [reference, setReference] = useState(
		`bellefu-${makeid(11)}`
	  );
	  const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;
	const [userData, setUserData] = useState({})
	const [profile, setProfile] = useState({})
	let url = 'https://bellefu.com/api/user/profile/details';

	  const metadata = {
		name: `${userData.firstName} ${userData.lastName}`,
		phone: userData.phone,
	  };
	
	  const componentProps = {
		email: userData.email,
		amount: props.match.params.product_plan === 'urgent' ? fee.urgent_upgrade_fee * 100 : props.match.params.product_plan === 'highlighted' ? fee.highlighted.upgrade_fee * 100: fee.featured_upgrade_fee * 100 ,
		name: `${profile.first_name} ${profile.last_name}`,
		phone: userData.phone,
		currency: 'USD',
		reference,
		metadata,
		publicKey: "pk_test_18f280bc5226dd715ba9a6997c73d56ec10d18ef",
		text: "Proceed",
		onSuccess: () => onSubmitHandle(),
		onClose: () => setReference(`bellefu-${makeid(11)}`),
	  };
	// const [voucherShow, setVoucherShow] = useState(true);
	// const [cardShow, setCardShow] = useState(true);

	const showVoucherInput = () => {
		// setVoucherShow(false);
	};
	const showCardInput = () => {
		// setCardShow(false);
	};

	//ONCHANGE FOR IMAGE
	const onChangHandler = (e) => {
		setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
	};


	//SUBMIT FUNCTION
	const onSubmitHandle = async (e) => {
		e.preventDefault();
		setLoading(true);
		let mainData = await {};
		let walletPayment = await {
			product_slug: `${props.match.params.slug}`,
			upgrade_plan: `${props.match.params.plan}`,
			payment_channel: paymentData.payment_channel
		};
		let voucherPayment = await {
			product_slug: `${props.match.params.slug}`,
			upgrade_plan: `${props.match.params.plan}`,
			payment_channel: paymentData.payment_channel,
			voucher_code: paymentData.voucher_code
		};
		let cardPayment = await {
			product_slug: `${props.match.params.slug}`,
			upgrade_plan: `${props.match.params.plan}`,
			payment_channel: paymentData.payment_channel,
			gateway_provider: paymentData.gateway_provider,
			reference: reference
		};
		if (paymentData.payment_channel === "wallet") {
			mainData = await walletPayment;
		} else if (paymentData.payment_channel === "voucher") {
			mainData = await voucherPayment;
		} else if (paymentData.payment_channel === "card") {
			mainData = await cardPayment;
		}
       
		let url = "https://bellefu.com/api/user/product/upgrade";
		axios
			.post(url, mainData, {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then(response => {
				setSuccess(response.data)
				setLoading(false);
			
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
		console.log(paymentData);
	};

	useEffect(() => {
		axios.get(url, {
			headers: {
				Authorization: `Bearer ${user !== null ? user.token : 'fjjhj'}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		}).then((res) => {
			setUserData(res.data.user)
			setProfile(res.data.user.profile)
		})

		axios
			.get("https://bellefu.com/api/user/product/upgrade/fee", {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setFee(res.data)
				console.log(res)
			})
			.catch((error) => {
				
			});
	}, []);
	
	return (
		<div>
			{success ? (
				<Redirect
					to={{
						pathname: "/upgrade_success",
						state: success.message
					}}
				/>
			) : null}
			<Container>
			{loading && (
				<div style={{height: '100vh', width: '100%'}}>
				<Preloader />
			</div>
			)}
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
										// disabled={voucherShow}
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
										// disabled={cardShow}
										>
										<option>---select category---</option>
										<option value="paystack">Paystack</option>
									</select>
								</Col>
							</Row>
							{paymentData.payment_channel === 'card' && paymentData.gateway_provider === 'paystack' ? (
								<PaystackButton
								style={{
									marginTop: "30px",
									backgroundColor: "#ffa500",
									border: "none",
									color: "white",
									fontSize: "17px",
									width: "100px",
									height: "40px"
								}}
								{...componentProps}
							  />
							) : (

							<Button
								style={styles.btnSubmit}
								variant="warning"
								size="sm"
								onClick={onSubmitHandle}>
								Proceed
							</Button>
							)}
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
