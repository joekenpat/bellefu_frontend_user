import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link, Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";
import { signin } from "../../redux/actions/userActon";
import Preloader from "./Preloader";

import { useEffect } from 'react';
const {Translate} = require('@google-cloud/translate').v2;
const id = 'AIzaSyAsMSfONcZLI-R5-fOMC79U94YBShHEoxo'

function LogInForm(props) {
	const [formData, setFormData] = useState({
		identifier: "",
		password: ""
	});
	
	const [text, setText] = useState([
		'Welcome Back',
		"Don't have an account?",
		'Sign Up Now',
		'Email or Phone',
		'Password',
		'Login'
	])
	const [originalText, setOriginalText] = useState([
		'Welcome Back',
		"Don't have an account?",
		'Sign Up Now',
		'Email or Phone',
		'Password',
		'Login'
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

	const dispatch = useDispatch();

	const userSignin = useSelector((state) => state.userSignin);
	const { loading, user, error } = userSignin;


	const { identifier, password } = formData;
	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();
		dispatch(signin(identifier, password)).then(() => {

			props.history.push("/");
			window.location.reload(true)
		})
	};

	return (
		<div>
			 {/* {user ? <Redirect to="/user_dashboard" />: null} */}
			{loading && (
				<div style={{height: '100vh', width: '100%'}}>
				<Preloader />
			</div>
			)}
			{error && (
				<div class="alert alert-danger" role="alert">
					<strong>{error.message}</strong>
				</div>
			)}
			<Card className="border-0">
				<Card.Body>
					<h4 className="text-center">
						<strong>{text[0]}</strong>
					</h4>
					<p className="text-center">
					{text[1]} <span ><Link to="/register" style={{color: "#ffa500"}}>{text[2]}!</Link></span>
					</p>

					<form onSubmit={onSubmitHandle} className="uk-grid-small" uk-grid>
						<div className="uk-margin-top">
							<div className="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon: mail"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large"
									placeholder={text[3]}
									type="text"
									value={identifier}
									name="identifier"
									onChange={(e) => onChangeHandler(e)}
								/>
							</div>
							{error && (
								<p style={styles.formError}>{error.errors.identifier}</p>
							)}
							{error && <p style={styles.formError}>{error.errors.email}</p>}
							{error && <p style={styles.formError}>{error.errors.phone}</p>}
							{error && <p style={styles.formError}>{error.errors.username}</p>}
						</div>
						<div className="uk-margin">
							<div className="uk-inline">
								<span
									className="uk-form-icon"
									uk-icon="icon:  lock"
									style={styles.iconForm}></span>
								<input
									required
									className="uk-input  uk-form-width-large "
									placeholder={text[4]}
									type="password"
									value={password}
									name="password"
									onChange={(e) => onChangeHandler(e)}
								/>
							</div>
							{error && <p style={styles.formError}>{error.errors.password}</p>}
						</div>

						<div className="uk-margin">
							<button
								class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
								style={styles.btnRegister}
								type="submit"
								onClick={onSubmitHandle}>
								<b>{text[5]}</b>
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
export default withRouter(LogInForm);
