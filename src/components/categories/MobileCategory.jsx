import React, { useState, useEffect } from "react";
import { Card, Row, Image, Col, Container } from "react-bootstrap";
import axios from "axios";
import Cookie from 'js-cookie'

import MobileCategoryItem from "./MobileCategoryItem";

export default function MobileCategory(props) {
	const [categoryData, setCategoryData] = useState([]);
	const [language, setLanguage] = useState(Cookie.get('language' || 'en'))

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
		<Container>
			<Row>
				{categoryData && categoryData.map((data) => (
					<MobileCategoryItem id={props.id} language={language} data={data} key={data.slug} />
				))}
			</Row>
		</Container>
	);
}
