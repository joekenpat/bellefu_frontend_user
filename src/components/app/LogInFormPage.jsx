import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeaderNav from "../navigations/HeaderNav";
import LogInForm from "../user/LogInForm";
import Cookie from 'js-cookie'



export default function LoginFormPage() {
    const [language, setLanguage] = useState(Cookie.get('language' || 'en'))
	return (
		<div>
			<HeaderNav />
			<Container >
                {/* DESKTOP VIEW */}
                <div style={styles.form1} className="d-none d-lg-block  d-md-none">
				<LogInForm language={language} />
                </div>
                {/* MOBILE VIEW */}
                <div style={styles.form2} className="d-lg-none  d-xs-block d-sm-block d-md-block ">
				<LogInForm language={language}  />
                </div>
			</Container >
		</div>
	);
}
 

const styles = {
    form1: {
        maxWidth: "500px",
        margin: "auto",
        marginTop: "20%",
    },
    form2: {
        maxWidth: "500px",
        margin: "auto",
        marginTop: "60%",
    }
}