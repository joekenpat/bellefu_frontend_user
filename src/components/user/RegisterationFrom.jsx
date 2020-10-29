import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter,Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { signup } from "../../redux/actions/userActon";
import Preloader from "./Preloader";
import { useEffect } from 'react';
const {Translate} = require('@google-cloud/translate').v2;
const id = 'AIzaSyAsMSfONcZLI-R5-fOMC79U94YBShHEoxo'

 function RegisterationFrom(props) {
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

	const [text, setText] = useState([
		"Let's create your account",
		"Already have an account?",
		'Login Now',
		'First Name',
		'Last Name',
		'Username',
		'Email',
		'Phone',
		'Password',
		'Gender',
		'Male',
		'Female',
		'Register',
		'do not add country code'
	])
	const [originalText, setOriginalText] = useState([
		"Let's create your account",
		"Already have an account?",
		'Login Now',
		'First Name',
		'Last Name',
		'Username',
		'Email',
		'Phone',
		'Password',
		'Gender',
		'Male',
		'Female',
		'Register',
		'do not add country code'
	])

	const translate = new Translate({key: id})

	const getLanguage = () => {
        if(props.language === 'en'){
            setText(originalText)
        } else {

            translate.translate(text, props.language)
            .then((res) => {
               
                    setText(res[0])
                
            }).catch((e) => {
                setText(originalText)
            })
        }
    }
    
    useEffect(() => {
        getLanguage()
    }, [])

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
		dispatch(
			signup(first_name, last_name, username, gender, phone, email, password)
		);
	};

	return (
		<div>
			{loading && (
				<div style={{height: '100vh', width: '100%'}}>
				<Preloader />
			</div>
			)}
			
			<Card className="border-0">
				<Card.Body>
				<h4 className="text-center">
						<strong>{text[0]}!</strong>
					</h4>
					<p className="text-center">
					{text[1]} <span><Link to="/login" style={{color: "#ffa500"}}>{text[2]}!</Link></span>
					</p>
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
									placeholder={text[3]}
									type="text"
									name="first_name"
									value={first_name}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
							{error && <p style={styles.formError}>{error.errors.first_name}</p>}
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
									placeholder={text[4]}
									type="text"
									name="last_name"
									value={last_name}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
							{error && <p style={styles.formError}>{error.errors.last_name}</p>}
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
									placeholder={text[5]}
									type="text"
									name="username"
									value={username}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
							{error && <p style={styles.formError}>{error.errors.username}</p>}
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
									placeholder={text[6]}
									type="email"
									name="email"
									value={email}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
							{error && <p style={styles.formError}>{error.errors.email}</p>}
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
									placeholder={`${text[7]} (${text[13]})`}
									type="text"
									name="phone"
									value={phone}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
							{error && <p style={styles.formError}>{error.errors.phone}</p>}
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
									placeholder={text[8]}
									type="password"
									name="password"
									value={password}
									onChange={(e) => onChangeHandelr(e)}
								/>
							</div>
							{error && <p style={styles.formError}>{error.errors.password}</p>}
						</div>

						<div class="uk-margin">
							<select
								class="uk-select  "
								name="gender"
								value={gender}
								onChange={(e) => onChangeHandelr(e)}>
								<option>{text[9]}</option>
								<option value="M" selected={gender === "M" ? true : false}>
								{text[10]}
								</option>
								<option value="F" selected={gender === "F" ? true : false}>
								{text[11]}
								</option>
							</select>
							{error && <p style={styles.formError}>{error.errors.gender}</p>}
						</div>
						<div className="uk-margin">
							<button type="submit" onClick={onSubmitHandle}
								class="uk-button uk-button-default uk-width-1-1
								uk-margin-small-bottom" style={styles.btnRegister}>
								<b>{text[12]}</b>
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
	},
	formError: {
		fontSize: "0.7em",
		color: "red",
		marginTop: "10px"
	}
};
export default withRouter(RegisterationFrom)