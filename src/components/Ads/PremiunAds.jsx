import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Row,
	Tooltip,
	Button,
	Spinner
} from "react-bootstrap";
import PremiumAdsItem from "./PremiumAdsItem";
import Cookie from 'js-cookie'

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (convert)
const convertTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		convert currency
	</Tooltip>
);




export default function PremiunAds(props) {
	const [id, setId] = useState('')
	const [loading, setLoading] = useState(false)
	const [language, setLanguage] = useState(Cookie.get('language' || 'en'))
	const [productsData, setProductsData] = useState([]);
	const [products, setProducts] = useState([])
	const [nextPageUrl, setNextPageUrl] = useState('')
	let apiUrl = `https://bellefu.com/api/product/list?country=${props.country.country_slug}`;

	
	
	const loadData = () => {
		axios
			.get(apiUrl, {
				headers: {
					Authorization: props.user !== null ? `Bearer ${props.user.token}` : 'hfh',
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setProducts(res.data.products)
				setProductsData(res.data.products.data);
				setNextPageUrl(res.data.products.next_page_url)
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const nextData = () => {
		setLoading(true)
		axios
			.get(nextPageUrl, {
				headers: {
					Authorization: props.user !== null ? `Bearer ${props.user.token}` : 'hfh',
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setLoading(false)
				setProducts(res.data.products)
				setNextPageUrl(res.data.products.next_page_url)
				setProductsData(productsData.concat(...res.data.products.data))
				console.log(productsData)
			})
	}

	

useEffect(() => {
	loadData();
}, [])

	return (
		<div>
			<Row>
			{ productsData.map((data, index) => (
				<PremiumAdsItem index={index} id={props.id} language={language} convertTooltip={convertTooltip} user={props.user} key={data.slug} data={data} styles={styles} />
									))
							}
			</Row>
			<div className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			{!loading ? (
				<div>
					{products.current_page !== products.last_page && (
						<div>
							{productsData.length > 0 && (
								<Button onClick={nextData} size="sm" style={{backgroundColor: '#ffa500', color: 'white', border: 'none'}}>load more</Button>
							)}
						</div>
					)}
				</div>
			) : (
				<Spinner animation="grow" />
			)
		}
			</div>
		</div>
	);
}

const styles = {
	image: {
		height: "150px",
		padding: "5px",
		borderRadius: "10px"
	},
	
	titleBody: {
		padding: "5px",
		paddingLeft: "10px"
	},
	price: {
		fontSize: "0.8em",
		backgroundColor: "whitesmoke",
		padding: "5px",
		color: "#ffa500"
	},
	favBtn: {
		marginBottom: "-220px",
		fontSize: "30px",
		color: "#ffa500",
		cursor: "pointer",
		padding: "2px",
		borderRadius: "50px",
		backgroundColor: "white"
	}
};
