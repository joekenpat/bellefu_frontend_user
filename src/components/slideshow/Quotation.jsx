import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as emailjs from 'emailjs-com'
import { useState } from 'react';


const Quotation = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        comment: '',
    })

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = () => {
        let templateParams = {
            from_name: state.name,
            // to_name: '<YOUR_EMAIL_ID>',
            reply_to: state.email,
            message: state.comment,
           }

           emailjs.send(
            'gmail',
            'template_a03c94h',
             templateParams,
            'user_Pzgh1Cw7fwFutBdlB8Kue'
           ).then(() => {
               console.log('email sent')
           }).catch((e) => {
               console.log(e)
           })
    }
    return (
        <div style={{backgroundColor: 'white' ,padding: '10px', border: '4px solid #DCDEE3'}}>
				<div style={{fontWeight: '500', fontSize: '17px'}}>One Custom Offer, Multiple Quotes</div>
				<div className="mt-4">
					<Form action="mailto:thechiefje@gmail.com" method="post" enctype="text/plain">
						<Form.Group>
							<Form.Control type="text" name="comment" onChange={handleChange} placeholder="What are you looking for?" />
						</Form.Group>
						<Form.Group>
							<Form.Control className="mt-2" type="text" name="name" onChange={handleChange} placeholder="Your name" />
						</Form.Group>
						<Form.Group>
							<Form.Control className="mt-2" type="email" name="email" onChange={handleChange} placeholder="Your email address" />
						</Form.Group>
						<div className="mt-4">
							<Button onClick={onSubmit} style={{backgroundColor: '#76BA1B', color: 'white', border: 'none'}} size="lg" block>
								Request Quotations
							</Button>
						</div>
					</Form>
				</div>
			</div>
    )
}

export default Quotation