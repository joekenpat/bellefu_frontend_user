import React, {useState, useEffect} from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import ReactCodeInput from 'react-verification-code-input';
import {FaArrowCircleRight} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import ImageUploader from 'react-images-upload';
import {useSelector} from 'react-redux';
import Preloader from './Preloader';
import Axios from "axios";
import jsonToFormData from 'json-form-data';

export default function Verification(props) {

//======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

	const [loading, setLoading] = useState(true)
	const [phoneCode, setPhoneCode] = useState([])
	const [seconds, setSeconds ] =  useState(0);
	const [number, setNumber] = useState('')
	const [showNumber, setShowNumber] = useState(false)
	const [error, setError] = useState('')
	const [idImage, setIdImage] = useState([])
	const [headerTitle, setHeaderTitle] = useState('Verify Account')
	const [componentToShow, setComponentToShow] = useState('')
	const [requestLoading, setRequestLoading] = useState(false)
	const [showCodeInput, setShowCodeInput] = useState(false)
	const [pendingID, setPendingID] = useState(false)
	
	let url = 'https://dev.bellefu.com/api/user/profile/details';

	useEffect(() => {
		Axios.get(url, {
			headers: {
				Authorization: `Bearer ${user.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
		.then((res) => {
			setLoading(false)
			console.log(res.data.user)
			setNumber(res.data.user.phone)
			if(res.data.user.phone_verification === null || res.data.user.phone_verification.status === 'pending'){
				setHeaderTitle('Phone Verification')
				setComponentToShow('phone')
			} else if (res.data.user.id_verification === null || res.data.user.phone_verification.status !== 'completed'){
				setHeaderTitle('ID Verification')
				setComponentToShow('id')
			} else if(res.data.user.phone_verification.status !== 'pending'){
				setPendingID(true)
			}
			else if (res.data.user.kyc_verification === null || res.data.user.kyc_verification.status === 'pending'){
				setHeaderTitle('KYC Verification')
				setComponentToShow('kyc')
			}
		}).catch((e) => {
			setError('Something Went Wrong')
		})
	}, [])

    useEffect(()=>{
    	let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                clearInterval(myInterval)
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
	});

	const onCodeRequest = (a) => {
		setRequestLoading(true)
		Axios
		.get('https://dev.bellefu.com/api/user/verification/request/phone_otp', {
			headers: {
				Authorization: `Bearer ${user.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
		.then(res => {
			console.log(res)
			setShowNumber(true)
			setRequestLoading(false)
			setShowCodeInput(true)
			setSeconds(60)
		})
		.catch(error => {
			console.log('this is error: ',error)
			setRequestLoading(false)
			setError('Something went wrong');
		});
	}
	
	const onChangHandlerImage = (e) => {
		setIdImage(e)
	}
	
	const onPhoneChange = (e)=> {
		console.log(e)
		setPhoneCode(e)
	} 

	useEffect(() => {
		if(phoneCode.length === 6){
			setLoading(true)
		Axios
		.post('https://dev.bellefu.com/api/user/verification/confirm/phone_otp', {verification_code: Number(phoneCode)}, {
			headers: {
				Authorization: `Bearer ${user.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
		.then(res => {
			console.log(res)
			setLoading(false)
			setHeaderTitle('ID Verification')
			setComponentToShow('id')
			setError('');
		})
		.catch(error => {
			console.log(error)
			setLoading(false)
			setError(error.response.data.message);
		});
	}
	}, [phoneCode.length])


	const onIdSubmit = async (e)=> {
		setLoading(true)
		let options = {
            initialFormData: new FormData(),
            showLeafArrayIndexes: true,
            includeNullValues: false,
            mapping: function(value) {
                if (typeof value === 'boolean') {
                    return +value ? '1' : '0';
                }
                return value;
            }
		};
		
		let data = jsonToFormData({id_images: idImage}, options);
        
		  
		Axios
		.post('https://dev.bellefu.com/api/user/verification/request/id', data, {
			headers: {
				Authorization: `Bearer ${user.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
		.then(res => {
			console.log(res)
			setLoading(false)
			setPendingID(true)
			setError('');
		})
		.catch(error => {
			console.log(error)
			setLoading(false)
			setError(error.response.data.message);
		});
	} 

	const onKycSubmit = (e)=> {
		setLoading(true)
		let formData = new FormData()
		formData.append('id_images', idImage)
		Axios
		.post('https://dev.bellefu.com/api/user/verification/request/id', formData, {
			headers: {
				Authorization: `Bearer ${user.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
		.then(res => {
			console.log(res)
			setLoading(false)
			setHeaderTitle('KYC Verification')
			setComponentToShow('kyc')
			setError('');
		})
		.catch(error => {
			console.log(error)
			setLoading(false)
			setError(error.response.data.message);
		});
	} 

    
	return (
		<div>
			{loading && (
				<div style={{height: '100vh', width: '100%'}}>
				<Preloader />
			</div>
			)}
			<Card className="border-0">
				<Card.Header
					className="border-0"
					style={{ backgroundColor: "#76ba1b" }}>
					<b style={{ color: "white" }}>{headerTitle}</b>
				</Card.Header>
				<Card.Body>
				{error.length > 0 && (
					<Alert style={{marginBottom: '15px'}} variant='danger'>
						{error}
				   </Alert>
				)}
				{showNumber && (
					<Alert style={{marginBottom: '15px'}} variant='success'>
						OTP has been sent to {' '} {number}
				   </Alert>
				)}
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: "flex-start", alignItems: 'center'}}>
					{/* for mobile verification */}
					<div style={{display: componentToShow === 'phone' ? 'block' : 'none'}}>
						<div style={{display: showCodeInput ? 'none' : 'block'}}>
							<Button onClick={onCodeRequest} style={{display: requestLoading ? 'none' : 'block'}} className="callToAction" size="md">
								Request Verification Code
							</Button>
							<Spinner style={{display: requestLoading ? 'block' : 'none'}} animation="grow" />
							
						</div>
						
						<div style={{display: showCodeInput ? 'block' : 'none'}}>
							<div>
								<ReactCodeInput type="number" fields={6} onChange={onPhoneChange} autoFocus={true} />
							</div>
							<div style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
								<Spinner style={{display: requestLoading ? 'block' : 'none'}} animation="grow" />
							</div>
							<div className="p-2" style={{display: requestLoading ? 'none' : 'flex', justifyContent: 'center', marginTop: '10px', border: '1px solid gray', borderRadius: '5px'}}>
								<span className="text-center" style={{fontSize: '20px', fontWeight: 'bold'}}>Resend Code</span>
								<span className="ml-2 pt-1" style={{display: seconds > 0 ? 'inline' : 'none', fontWeight: 'bold', textAlign: 'center', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#ffa500', color: 'white'}}>
									{seconds}
								</span>
								<span style={{display: seconds > 0 ? 'none' : 'inline', alignSelf: 'center'}} className="ml-2 cursor">
								<IconContext.Provider value={{ color: "#76BA1B", size: '35px'}}>
									<FaArrowCircleRight onClick={onCodeRequest} />
								</IconContext.Provider>
								</span>
							</div>
						</div>
					</div>
					{/* for ID verification */}
					<div style={{display: componentToShow === 'id' ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
						<div>
							<ImageUploader
								withIcon={true}
								buttonText="Choose image ID's to upload"
								onChange={e => onChangHandlerImage(e)}
								imgExtension={['.jpg', '.png', '.jpeg']}
								maxFileSize={5242880}
								withPreview={true}
								fileSizeError=" file size is too big"
							/>
						</div>
						<div style={{alignSelf: 'center'}} className="mt-3">
							<Button onClick={onIdSubmit} className="callToAction" size="md">
								Submit My ID
							</Button>
						</div>
					</div>
					<div style={{display: pendingID ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center'}}>
						<div className="mt-3">
						<Alert variant='primary'>
							Your ID verification is pending. If accepted, the last step is KYC request.
						</Alert>
						</div>

					</div>
					{/* for KYC verification */}
					<div style={{alignSelf: 'center', display: componentToShow === 'kyc' && !pendingID ? 'block' : 'none'}} className="mt-3">
						<Button onClick={onKycSubmit} className="callToAction" size="md">
							Request KYC
						</Button>
					</div>
				</div>
                </Card.Body>
			</Card>
		</div>
	);
}
