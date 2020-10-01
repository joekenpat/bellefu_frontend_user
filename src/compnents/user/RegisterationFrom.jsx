import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { signup } from "../../redux/actions/userActon";
import Preloader from "../user/Preloader";

export default function RegisterationFrom(props) {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		username: "",
		gender: "",
		phone: "",
		email: "",
		password: ""
	});

	const dispatch = useDispatch();
	const userSignup = useSelector((state) => state.userSignup);
	const { loading, user, error } = userSignup;

	useEffect(() => {
		if (user) {
			
			props.history.push('/login')
		}
		return () => {};
	}, [user]);

	const {
		first_name,
		last_name,
		username,
		gender,
		phone,
		email,
		password
	} = formData;
	const onChangeHandelr = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();
		if (
			formData.first_name.length >= 3 &&
			formData.last_name.length >= 3 &&
			formData.username.length >= 3 &&
			formData.gender.length !== '' &&
			formData.phone.length >= 3 &&
			formData.email.length >= 3 &&
			formData.password.length >= 3
		) {
			dispatch(
				signup(first_name, last_name, username, gender, phone, email, password)
			);
		} else {
			alert("form can't be empty");
		}
	};

	return (
		<div>
			{loading && <Preloader />}
			
			<Card className="border-0">
				<Card.Body>
					<form onSubmit={onSubmitHandle} className="uk-grid-small" uk-grid>
						<div class="uk-margin-top">
							<div className="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon: question"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large"
									placeholder="Frist Name"
									type="text"
									name="first_name"
									value={first_name}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
						</div>
						<div className="uk-margin">
							<div class="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon:  info"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large"
									placeholder="Last Name"
									type="text"
									name="last_name"
									value={last_name}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
						</div>
						<div className="uk-margin">
							<div className="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon: user"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large"
									placeholder="Username"
									type="text"
									name="username"
									value={username}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
						</div>
						<div className="uk-margin">
							<div className="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon: mail"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large"
									placeholder="Email"
									type="email"
									name="email"
									value={email}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
						</div>
						<div className="uk-margin">
							<div className="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon:  receiver"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large "
									placeholder="phone"
									type="text"
									name="phone"
									value={phone}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
						</div>
						<div className="uk-margin">
							<div className="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon:  lock"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large"
									placeholder="password"
									type="password"
									name="password"
									value={password}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
						</div>

						<div class="uk-margin">
							<select
								class="uk-select  "
								name="gender"
								value={gender}
								onChange={(e) => onChangeHandelr(e)}>
								<option>Gender</option>
								<option value="M" selected={gender === "M" ? true : false}>
									Male
								</option>
								<option value="F" selected={gender === "F" ? true : false}>
									Female
								</option>
							</select>
						</div>
						<div className="uk-margin">
							<button type="submit" onClick={onSubmitHandle}
								class="uk-button uk-button-default uk-width-1-1
								uk-margin-small-bottom" style={styles.btnRegister}>
								<b>Register</b>
							</button>
						</div>
					</form>
				</Card.Body>
			</Card>
		</div>
	);
}

const styles = {
	iconForm: {
		color: "#ffa500"
	},
	btnRegister: {
		backgroundColor: "#ffa500",
		border: "none",
		color: "white"
	}
};
