import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import axios from "axios";
import { useSelector } from "react-redux";
import {
	Card,
	Tooltip,
} from "react-bootstrap";

import InfiniteScroll from 'react-infinite-scroll-component';
import FavouriteItem from "./FavouriteItem";


//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (unlike ad)
const unlikeTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Unlike Ad
	</Tooltip>
);

//THIS IS FOR HOVER TOOLTIP TO SHOW A TEXT (view)
const viewTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		View Ad
	</Tooltip>
);

const pageLimit = 10;
export default function FavouriteAdTable(props) {
	const [loading, setLoading] = useState(true);
	const [loadingg, setLoadingg] = useState(false);
	const [ad, setAd] = useState([]);
	const [products, setProducts] = useState([])
	const [nextPageUrl, setNextPageUrl] = useState('')
	const [status, setStatus] = useState('loading')

	const userSignin = useSelector((state) => state.userSignin);
	const { user } = userSignin;

	const onAdDelete = (slug) => {
		setAd((ads) =>
      	ads.filter((ad) => ad.slug !== slug)
    );
	}

	const nextData = () => {
		setLoading(false);
		axios
			.get(nextPageUrl, {
				headers: {
					Authorization: `Bearer ${user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				setProducts(res.data.favourites)
				setNextPageUrl(res.data.favourites.next_page_url)
				console.log('called next page: ', nextPageUrl)
				setAd(ad.concat(...res.data.favourites.data))
			})
	}


	let url = "https://dev.bellefu.com/api/user/product/favourite/list";
	useEffect(() => {
			axios
				.get(`${url}`, {
					headers: {
						Authorization: `Bearer ${user.token}`,
						"Content-Type": "application/json",
						Accept: "application/json"
					}
				})
				.then((res) => {
					setLoading(false);
					setProducts(res.data.favourites)
					console.log(res.data.favourites.data)
					setAd(res.data.favourites.data);
					setNextPageUrl(res.data.favourites.next_page_url)
					if(res.data.favourites.data.length < 1){
						setStatus('No Favourite Ad')
					}
				})
				.catch((error) => {
					setStatus('No Favourite Ad')
					setLoading(false);
					setAd([]);
				});
		
	}, []);

	return (
		<div>
			{loadingg && (
				<Preloader />
			)}
			<Card className="border-0">
				<Card.Body>
					<table className="uk-table uk-table-responsive uk-table-divider">
						<thead style={{ backgroundColor: "#76ba1b", color: "white" }}>
							<tr>
								<th
									style={{ color: "white", fontWeight: "bold" }}
									className="uk-table-expand">
									Ads
								</th>
								<th
									style={{ color: "white", fontWeight: "bold" }}
									className="uk-width-*">
									{" "}
								</th>

								<th style={{ color: "white", fontWeight: "bold" }}>Status</th>
								<th
									className="uk-table-expand"
									style={{ color: "white", fontWeight: "bold" }}>
									Acion
								</th>
							</tr>
						</thead>
						<tbody>
							{loading ? (
								<div style={{height: '100vh', width: '100%'}}>
								<Preloader />
							</div>
							) : (
								
								ad.map((data) => (
									<FavouriteItem setLoadingg={setLoadingg} key={data.id} onAdDelete={onAdDelete} styles={styles} data={data} viewTooltip={viewTooltip} unlikeTooltip={unlikeTooltip} {...props} user={user}/>
								))
							)}
						</tbody>
					</table>
					<InfiniteScroll
						dataLength={ad.length}
						next={nextData}
						hasMore={products.current_page !== products.last_page ? true : false}
						loader={<h4 style={{textAlign: 'center', color: 'gray'}}>Loading...</h4>}
						endMessage={
						<p style={{ textAlign: 'center' }}>
							
						</p>
						}
						>
					</InfiniteScroll>
					{ad.length < 1 && (
						<div className={"text-center"}>
							<p>{status}</p>
						</div>
					)}
					
				</Card.Body>
			</Card>
		</div>
	);
}

const styles = {
	image: {
		height: "100px"
	},
	icon: {
		fotsize: "30px",
		color: "#ffa500"
	},
	titel: {
		opacity: "0.9",
		fontSize: "20px",
		width: "300px",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis"
	},
	category: {
		fontSize: "0.7em",
		color: "#ffa500",
		backgroundColor: "whitesmoke",
		padding: "3px"
	},
	subCategory: {
		fontSize: "0.7em",
		color: "#ffa500",
		backgroundColor: "whitesmoke",
		padding: "3px"
	},
	location: {
		fontSize: "0.7em"
	},
	date: {
		fontSize: "0.7em"
	},
	price: {
		fontSize: "0.9em",
		color: "#ffa500",
		backgroundColor: "whitesmoke",
		padding: "3px"
	}
};
