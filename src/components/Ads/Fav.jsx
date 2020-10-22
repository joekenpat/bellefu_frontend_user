import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import axios from 'axios'

const Fav = (props) => {
	const [isRed, setIsRed] = useState(props.data.is_user_favourite ? true : false)

    const toggleFav = (e, product_slug, isFav, color) => {
		if(!props.user) {
			props.history.push('/login')
		}
		setIsRed(!isRed)
		axios
			.get(`https://dev.bellefu.com/api/user/product/favourite/${isFav ? 'remove' : 'add'}/${product_slug}`, {
				headers: {
					Authorization: props.user ? `Bearer ${props.user.token}` : 'hfh',
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


    return (
        <div>
            <AiFillHeart
                style={{color: isRed ? 'red' : '#ffa500', marginBottom: "-220px",
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