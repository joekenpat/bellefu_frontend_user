import React from 'react'
import { Col, Row, Container, Accordion, Card, Form, Button } from "react-bootstrap";
import Verification from "../user/Verification"
import HeaderNav from "../navigations/HeaderNav";
import BottomNav from "../navigations/BottomNav";
import DashBoardNav from "../user/DashBoardNav";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import SnackBar from '../SnackBar/SnackBar';
import Axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Preloader from './Preloader';



export default function Password() {
    const userSignin = useSelector((state) => state.userSignin);
  const { user } = userSignin;
  const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        current_password: '',
        new_password: '',
        retype_new_password: ''
    })
    const [snack, setsnack] = useState({
		view: false,
		type: "",
		message: "",
      });

    const url = `https://bellefu.com/api/user/password/update`;

    const handleSubmit = (e) => {
        e.preventDefault()
        if(data.new_password !== data.retype_new_password){
            setsnack({
                view: true,
                type: 'error',
                message: "Passwords do not match"
            })
            setTimeout(() => {
                setsnack({
                    view: false,
                    type: '',
                    message: ""
                })
            }, 3000)
        } else if (data.new_password.length < 1 || data.current_password.length < 1){
            setsnack({
                view: true,
                type: 'error',
                message: "All fields are required"
            })
            setTimeout(() => {
                setsnack({
                    view: false,
                    type: '',
                    message: ""
                })
            }, 3000)
        }
        
        else {
        setLoading(true)
        Axios.post(url, data, {
            headers: {
				Authorization: `Bearer ${user.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
        }).then((e) => {
            setLoading(false)
            setsnack({
                view: true,
                type: 'success',
                message: "Password updated successfully"
            })
            setTimeout(() => {
                setsnack({
                    view: false,
                    type: '',
                    message: ""
                })
            }, 5000)
        }).catch((e) => {
            setLoading(false)
            setsnack({
                view: true,
                type: 'error',
                message: "Current password is incorrect"
            })
            setTimeout(() => {
                setsnack({
                    view: false,
                    type: '',
                    message: ""
                })
            }, 5000)
        })
    }
    }

      
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
        <HeaderNav />
        {loading && <Preloader />}
        {snack.view && <SnackBar type={snack.type}>{snack.message}</SnackBar>}

        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                    <div className="d-none d-lg-block  d-md-none">
                        <h3
                            style={{
                                marginTop: "33%",
                                marginBottom: "20px",
                                opacity: "0.5"
                            }}>
                            Reset Password
                        </h3>
                        <DashBoardNav />
                    </div>
                    {/* ======FOR MOBILE DASHBOARDNAV====== */}
                    <div className=" d-lg-none  d-xs-block d-sm-block d-md-block ">
                        <h3
                            style={{
                                marginTop: "30%",
                                marginBottom: "20px",
                                opacity: "0.5",
                                fontSize: "20px"
                            }}>
                          Reset Password
                        </h3>
                        <Accordion>
                            <Accordion.Toggle
                                as={Card.Header}
                                style={{ backgroundColor: "white", marginLeft: "0px" }}
                                eventKey="0">
                                <Row type="button">
                                    <Col xs={2} sm={2}>
                                        <AiOutlineMenu
                                            style={{ color: "#ffa500", fontSize: "30px" }}
                                        />
                                    </Col>
                                    <Col xs={8} sm={8}>
                                        <label className="mr-1" style={{ fontSize: "0.9em" }}>
                                            <b style={{ opacity: "0.7" }}>Dashboard Navigation</b>
                                        </label>
                                    </Col>
                                    <Col xs={2} sm={2}>
                                        <IoMdArrowDropdown
                                            style={{ color: "#ffa500", fontSize: "30px" }}
                                        />
                                    </Col>
                                </Row>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <DashBoardNav />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={12} lg={9} xl={9} style={{ marginTop: "10.7%" }}>	
                    <div className="mt-3">
                        <Card className="border-0">
                            <Card.Header
                                className="border-0"
                                style={{ backgroundColor: "#76ba1b" }}>
                                <b style={{ color: "white" }}>Change Your Password</b>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <Form>
                                        <Form.Label style={{fontSize: '13px'}}>Current Password</Form.Label>
                                        <div class="input-group mb-3 shadow-none" style={{ height: "40px" }}>
                                            <Form.Control
                                                value={data.current_password}
                                                name="current_password"
                                                onChange={handleChange}
                                                type="password"
                                                style={{ height: "40px", boxShadow: "none" }}
                                            />
                                        </div>
                                        <Form.Label style={{fontSize: '13px'}}>New Password</Form.Label>
                                        <div class="input-group mb-3 shadow-none" style={{ height: "40px" }}>
                                            <Form.Control
                                                value={data.new_password}
                                                name="new_password"
                                                onChange={handleChange}
                                                type="password"
                                                style={{ height: "40px", boxShadow: "none" }}
                                            />
                                        </div>
                                        <Form.Label style={{fontSize: '13px'}}>Confirm New Password</Form.Label>
                                        <div class="input-group mb-3 shadow-none" style={{ height: "40px" }}>
                                            <Form.Control
                                                value={data.retype_new_password}
                                                name="retype_new_password"
                                                onChange={handleChange}
                                                type="password"
                                                style={{ height: "40px", boxShadow: "none" }}
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <Button onClick={handleSubmit} style={{backgroundColor: '#ffa500', color: 'white', border: 'none'}} size="lg">
                                                Change Password
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
        <BottomNav />
            
        </div>
    )
}
