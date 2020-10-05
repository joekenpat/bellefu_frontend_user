import React, { useState, useEffect }  from 'react'
import { Row, Col, Card } from "react-bootstrap"
import { MdLocationOn } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { IoIosTime } from "react-icons/io"
import { AiFillPhone, AiFillEye } from "react-icons/ai"
import { FaSlackHash } from "react-icons/fa"
import Preloader from "../user/Preloader";
import axios from "axios";

export default function AdDetails(props) {
    const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [productsDataDetail, setproductsDataDetail] = useState([]);
	let url = "https://dev.bellefu.com/api/product/show";
    const  { slug } =  (props.location && props.location.productsData) || {};


    useEffect(() => {
    axios
    .get(`${url}/${slug}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    .then((res) => {
        setLoading(false);
        setproductsDataDetail(res.data.product.data);
        setError("");
    })
    .catch((error) => {
        setLoading(false);
        setError("Something went worng");
        console.log(error);
    });

}, [productsDataDetail]);
    
    return (
        <div>
            <Row>
            {loading ? (
					<Preloader />
				) : (
                    productsDataDetail && 
                    productsDataDetail.map((data) => (
                <Col>
                <Card className="border-0">
                <Card.Header
						className="border-0"
						style={{ backgroundColor: "#76ba1b" }}>
						<b style={{ color: "white" }}>AdDetails</b>
					</Card.Header>
                    <Card.Body>    
                        <Row>
                            <Col xm={12} sm={12} md={12} lg={6} xl={6} >
                                <div className="mt-3">
                              <MdLocationOn style={styles.icon} className="mr-3"/> <span style={styles.text}><b>Location</b></span>
                              </div>
                             <p className="ml-5">{data.address}</p>
                            </Col>
                            <Col xm={12} sm={12} md={12} lg={6} xl={6} >
                                <div className="mt-3">
                              <GiReceiveMoney style={styles.icon} className="mr-3"/> <span style={styles.text}><b>Price</b></span>
                              </div>
                             <p className="ml-5 ">
                                  {data.currency_symbol}
                                 {data.price}
                             </p>
                            </Col>
                            <Col xm={12} sm={12} md={12} lg={6} xl={6} >
                                <div className="mt-3">
                              <IoIosTime style={styles.icon} className="mr-3"/> <span style={styles.text}><b>Posted</b></span>
                              </div>
                             <p className="ml-5">{data.created_at}</p>
                            </Col>
                            <Col xm={12} sm={12} md={12} lg={6} xl={6} >
                                <div className="mt-3">
                              <AiFillPhone style={styles.icon} className="mr-3"/> <span style={styles.text}><b>Phone Number</b></span>
                              </div>
                             <p className="ml-5 ">{data.phone}</p>
                            </Col>
                            <Col xm={12} sm={12} md={12} lg={6} xl={6} >
                                <div className="mt-3">
                              <AiFillEye style={styles.icon} className="mr-3"/> <span style={styles.text}><b>Ad Views</b></span>
                              </div>
                             <p className="ml-5">{data.inorganic_view}</p>
                            </Col>
                            <Col xm={12} sm={12} md={12} lg={6} xl={6} >
                                <div className="mt-3">
                              <FaSlackHash style={styles.icon} className="mr-3"/> <span style={styles.text}><b>Ad Slug</b></span>
                              </div>
                             <p className="ml-5 ">{data.slug}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className="border-0 mt-4">
                <Card.Header
						className="border-0"
						style={{ backgroundColor: "#76ba1b" }}>
						<b style={{ color: "white" }}>Ad Discription</b>
					</Card.Header>
                    <Card.Body>    
                     <Row>
                     <Col xm={12} sm={12} md={12} lg={6} xl={6} >
                     <span style={styles.text}>{data.description}</span>
                         </Col>
                     </Row>
                    </Card.Body>
                </Card>
                </Col>
                	))
                    )}
            </Row>
        </div>
    )
}

const styles  = {
    icon: {
     color: "#ffa500",
     fontSize: "30px"
    },
    text: {
        fontSize: "15px"
    }
}