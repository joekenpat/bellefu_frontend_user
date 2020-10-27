import React, { useState, useEffect } from "react";
import { ListGroup, Row, Col, Image, Accordion, Card } from "react-bootstrap";
import { IoMdArrowDropright } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";

//==========THIS COMPONENT ONLY SHOWS ON DESKTP VIEW =========//
//==========THIS COMPONENT IS ALL SO MAKING USE OF UIKIT FOR DROP DOWN RIGHT CENTER, WICH I ADDED THROUGH CDN =======//
export default function MainDesktop() {
	// ==============CATEGORY LIST STATE =========

	const [categoryData, setCategoryData] = useState([]);
	const [loading, setLoading]= useState(true)


	const loadCategory = () => {
		axios
			.get("https://dev.bellefu.com/api/category/list", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setCategoryData(res.data.categories);
				setLoading(false)
			})
			.catch((error) => {
				//    setError("Something went worng");
				console.log(error);
			});
	};

	// ==============SUBCATEGORY LIST STATE =========


	useEffect(
		() => {
			loadCategory();
		},
		[]
	);
	return (
		<div>
			{/* =======THIS IS FOR AGRICULTURAL TOOLS====== */}
			{loading ? (
				<div />
			) : (
				<div>
					{categoryData && categoryData.map((data) => (
				<Accordion key={data.slug}>
					<Card className="border-0 cursor">
						<Accordion.Toggle
							as={Card.Header}
							style={{ backgroundColor: "white" }}
							eventKey="0">
							<div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}} type="button">
								<div style={{alignSelf: 'center'}}>
									<Image
										height="40px"
										width="40px"
										src={`https://dev.bellefu.com/images/categories/${data.image}`}
										roundedCircle
									/>
								</div>
								<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
									<div className="pt-1">
										<label className="mr-1" style={{ fontSize: "0.77em" }}>
											{data.name}
										</label>
									</div>
									<div>
										<IoMdArrowDropright
											style={{ color: "#ffa500", fontSize: "20px" }}
										/>
									</div>
								</div>
							</div>
						</Accordion.Toggle>

						{/* =============SUB CATRGOTY=============== */}
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								{data.subcategories.map((data) => (
									<ListGroup.Item key={data.slug}>
										<Link
											to={`/product_list?subcategory=${data.slug}`}
											style={{ color: "inherit", textDecoration: "inherit" }}>
											<p style={{ fontSize: "0.66em", textAlign: 'center' }}>{data.name}</p>
											<div style={{ marginTop: "-38px" }}>
												<br />
											</div>
											<p
												style={{
													textAlign: 'center',
													fontSize: "0.6em",
													opacity: "0.5",
													marginBottom: "-0px",
													color: 'gray'
												}}>
												{data.products_count} ads
											</p>
										</Link>
									</ListGroup.Item>
								))}
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			))}
				</div>
			)
		}

			
		</div>
	);
}
