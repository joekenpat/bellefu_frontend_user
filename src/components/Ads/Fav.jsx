import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import axios from 'axios'
import { useSelector } from "react-redux";


const Fav = (props) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { user } = userSignin;
    const [isRed, setIsRed] = useState(user ? props.data.is_user_favourite ? true : false : false)

    const toggleFav = (e, product_slug, isFav, color) => {
		if(!user.token) {
			props.history.push('/login')
		}
		setIsRed(!isRed)
		axios
			.get(`https://dev.bellefu.com/api/user/product/favourite/${isFav ? 'remove' : 'add'}/${product_slug}`, {
				headers: {
					Authorization: user !== null ? `Bearer ${user.token}` : 'hfh',
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

			    <div className="d-none d-md-block">
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
                <div className="d-block d-md-none">
                <AiFillHeart
                style={{color: isRed ? 'red' : '#ffa500',
                fontSize: "30px",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "50px",
                backgroundColor: "white",}}
                onClick={(e) => toggleFav(e, props.data.slug, props.data.is_user_favourite)}
            />
                </div>
        </div>
    )
}

export default Fav;