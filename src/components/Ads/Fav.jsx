import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import axios from 'axios'

const Fav = (props) => {

    const toggleFav = (e, product_slug, isFav) => {
		if(!props.user) {
			props.history.push('/login')
		}
		Switch(e)
		axios
			.get(`https://dev.bellefu.com/api/user/product/favourite/${isFav ? 'remove' : 'add'}/${product_slug}`, {
				headers: {
					Authorization: `Bearer ${props.user.token}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})
			.then((res) => {
				console.log(res)
				
			})
			.catch((error) => {
				console.log(error);
			});
	}

	//==FUNCTION FOR LIKE AND UNLIKE BUTTON
const Switch = (e)  => {
	if (e.target.style.color === "#ffa500") {
		e.target.style.color = "red";
	} else if (e.target.style.color === "red") {
		e.target.style.color = "#ffa500";
	} else {
		e.target.style.color = "red";
	}
}
    return (
        <div>
            <AiFillHeart
                style={{color: props.data.is_user_favourite === true ? 'red' : '#ffa500', marginBottom: "-220px",
                fontSize: "30px",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "50px",
                backgroundColor: "white",}}
                onClick={(e) => toggleFav(e, props.data.slug, props.data.is_user_favourite)}
            />
        </div>
    )
}

export default Fav;