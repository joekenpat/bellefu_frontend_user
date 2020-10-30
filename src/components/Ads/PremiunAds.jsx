import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Card,
	Col,
	Row,
	OverlayTrigger,
	Badge,
	Tooltip,
	Accordion,
	Button
} from "react-bootstrap";
import PremiumAdsItem from "./PremiumAdsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector} from 'react-redux';
import Cookie from 'js-cookie'

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (convert)
const convertTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		convert currency
	</Tooltip>
);




export default function PremiunAds(props) {
	const [id, setId] = useState('')

	const [language, setLanguage] = useState(Cookie.get('language' || 'en'))
	const [productsData, setProductsData] = useState([]);
	const [products, setProducts] = useState([])
	const [nextPageUrl, setNextPageUrl] = useState('')
	let apiUrl = `https://dev.bellefu.com/api/product/list?country=${props.country.country_slug}`;

	
	
	const loadData = () => {
		axios
			.get(apiUrl, {
				headers: {
					Authorization: props.user ? `Bearer ${props.user.token}` : 'hfh',
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
		axios
			.get(nextPageUrl, {
				headers: {
					Authorization: props.user ? `Bearer ${props.user.token}` : 'hfh',
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
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
			{ productsData.map((data) => (
				<PremiumAdsItem id={props.id} language={language} convertTooltip={convertTooltip} user={props.user} key={data.slug} data={data} styles={styles} />
									))
							}
			</Row>
			<div className="mt-4">
			<InfiniteScroll
				dataLength={productsData.length}
				next={nextData}
				hasMore={products.current_page !== products.last_page ? true : false}
				loader={<h4 style={{textAlign: 'center', color: 'gray'}}>Loading...</h4>}
				endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Yay! You have seen it all</b>
				</p>
				}
				>
			</InfiniteScroll>
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
