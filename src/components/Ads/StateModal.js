import Axios from 'axios';
import React, { useState } from 'react';
import { Container, Card, Col, Row, Modal, Button, InputGroup, FormControl, Spinner } from "react-bootstrap";
import { FaArrowLeft, FaBackspace } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Flag from 'react-world-flags';



export default function MyVerticallyCenteredModal(props) {
    const [searchedState, setSearchedState] = useState('')
    const [isState, setIsState] = useState(true)
    const [loading, setLoading] = useState(false)
    const [altState, setAltState] = useState([])

    const onChange = async (e) => {
        await setAltState([])
        setSearchedState(e.target.value)
        const regexp = await new RegExp(`${searchedState.toLowerCase()}`)
        props.states.forEach((state) => {
            if(regexp.test(state.name.toLowerCase())){
                setAltState([...altState, state])
                console.log(state.name)
            }

        })
        
    }

    const selectLga = (lga) => {
        props.setLga(lga)
        setIsState(true)
        setAltState([])
        props.onHide()
    }

    const selectAllState = () => {
        setAltState([])
        props.setLga('')
        setIsState(true)
        props.onHide()
    }
    
    const loadLga = (name, code) => {
        setLoading(true)
        props.setState(name)
        Axios.get(`https://dev.bellefu.com/api/${props.country.country_iso2}/${code}/lga/list`)
        .then((res) => {
            setIsState(false)
            setLoading(false)
            props.setLgas(res.data.lgas)
        }).catch((e) => {
            console.log('the error:  ', e)
        })
    }
	return (
	  <Modal
		{...props}
		size="lg"
		aria-labelledby="state-modal"
		centered
	  >
		<Modal.Header closeButton>
		  <Modal.Title id="state-modal">
			<Container>
				<Row>
					<Col xs={12}>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>
									<Flag style={{width: '20px', height: '20px', paddingTop: '3px'}} code={props.country.country_iso2} />
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl onChange={onChange} value={searchedState} name="searchedState" id="search-state" placeholder="search city" />
						</InputGroup>
					</Col>
				</Row>
			</Container>
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  <container>
			<div className="ml-3">
			<h5 className="text">All {props.country.country_name}</h5>
            <div style={{display: loading ? 'flex' : 'none', height: '300px', justifyContent: 'center', alignItems: 'center'}}>
                <Spinner animation="grow" />
            </div>
            
			{isState ? (
                 <div style={{display: loading ? 'none' : 'block'}}>
                     {altState.length > 0 ? (
                         <Row style={{height: '300px', overflowY: 'scroll'}}>
                         {altState.map((data, index) => (
                             <Col key={data.id} sm={6} lg={3}>
                                 <p onClick={() => loadLga(data, data.code)} className="cursor country" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                     <div style={{fontSize: '13px'}}>{data.name}</div>
                                     <div>></div>
                                 </p>
                             </Col>
                         ))}
                         </Row>
                     ) : (
                        <div>
                        <Row style={{height: '300px', overflowY: 'scroll'}}>
                            {props.states.map((data, index) => (
                                <Col key={data.id} sm={6} lg={3}>
                                    <p onClick={() => loadLga(data, data.code)} className="cursor country" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <div style={{fontSize: '13px'}}>{data.name}</div>
                                        <div>></div>
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </div>
                     )
                    }
                 </div>
            ) : (
                <div style={{display: loading ? 'none' : 'block'}}>
                    <IconContext.Provider value={{ color: "#76BA1B", size: '30px', style: {marginBottom: '10px'}}}>
                        <FaArrowLeft className="cursor" onClick={() => setIsState(true)} />
                    </IconContext.Provider>
                    <Row style={{height: '300px', overflowY: 'scroll', }}>
                        <Col xs={6} lg={3}>
                            <p onClick={() => selectAllState()} className="cursor country" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <div style={{fontSize: '13px'}}>All {props.state.name}</div>
                                <div>></div>
                            </p>
                        </Col>
                    {props.lgas.map((data) => (
                        <Col key={data.id} xs={6} lg={3}>
                            <p onClick={() => selectLga(data)} className="cursor country" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <div style={{fontSize: '13px'}}>{data.name}</div>
                                <div>></div>
                            </p>
                        </Col>
                    ))}
			    </Row>
                </div>
            )
        }
			</div>
		  </container>
		</Modal.Body>
		<Modal.Footer>
		</Modal.Footer>
	  </Modal>
	);
  }