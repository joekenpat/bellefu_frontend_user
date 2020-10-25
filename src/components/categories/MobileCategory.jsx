import React, { useState, useEffect } from "react";
import { Card, Row, Image, Col } from "react-bootstrap";
import agro_tools from "../images/agro_tools.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MobileCategory() {
	const [categoryData, setCategoryData] = useState([]);

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
				//    setError("");
			})
			.catch((error) => {
				//    setError("Something went worng");
				console.log(error);
			});
	};
	useEffect(() => {
		loadCategory();
	}, []);
	return (
		<div>
			<Row>
				{categoryData && categoryData.map((data) => (
					<Col key={data.slug} xs={4} sm={4} md={4} className=" my-1 px-1">
						<Card style={{ height: "100%" }} className="border-0">
							<Link
								to={`/subcategory/${data.slug}`}
								style={{ color: "inherit", textDecoration: "inherit" }}>
								<Card.Body className="text-center">
									<Image
										src={`https://dev.bellefu.com/images/categories/${data.slug}/${data.image}`}
										style={{ height: "40px" }}
									/>
									<Card.Text style={{ fontSize: "0.6em" }} className="mt-2">
										{data.name}
									</Card.Text>
								</Card.Body>
							</Link>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
}
