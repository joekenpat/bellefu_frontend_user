import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from 'js-cookie'
import MainDesktopItem from "./MainDesktopItem";

//==========THIS COMPONENT ONLY SHOWS ON DESKTP VIEW =========//
//==========THIS COMPONENT IS ALL SO MAKING USE OF UIKIT FOR DROP DOWN RIGHT CENTER, WICH I ADDED THROUGH CDN =======//
export default function MainDesktop(props) {
	// ==============CATEGORY LIST STATE =========

	const [categoryData, setCategoryData] = useState([]);
	const [loading, setLoading]= useState(true)
	const [language, setLanguage] = useState(Cookie.get('language' || 'en'))


	const loadCategory = () => {
		axios
			.get("https://bellefu.com/api/category/list", {
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
						<MainDesktopItem id={props.id} language={language} data={data} />
			))}
				</div>
			)
		}

			
		</div>
	);
}
