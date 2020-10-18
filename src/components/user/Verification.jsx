import React, {useState, useEffect} from "react";
import { Card, Form } from "react-bootstrap";

export default function Verification() {
    const [verificationCode, setVerificationCode] = useState({
        Verification_code: ""
    })

    useEffect(() => {
      
    }, )
    
	return (
		<div>
			<Card className="border-0">
				<Card.Header
					className="border-0"
					style={{ backgroundColor: "#76ba1b" }}>
					<b style={{ color: "white" }}>Verifie Your Account </b>
				</Card.Header>
				<Card.Body>
                <Form >
                <input class="uk-input" type="text"/>
                </Form>
                </Card.Body>
			</Card>
		</div>
	);
}
