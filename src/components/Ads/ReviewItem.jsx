import React from 'react';
import Moment from 'react-moment';
import ReactStars from "react-rating-stars-component";



const ReviewItem = (props) => {
    return (
        <div className="mt-3">
            <div className="mt-1">
                <ReactStars
                    count={5}
                    size={24}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={props.data.rating}
                    edit={false}
                    isHalf={true}
                />
            </div>
            <div className="mt-2" >{props.data.message}</div>
            <div className="mt-2"  style={{color: 'gray', fontSize: '13px'}}><Moment format="dddd Do, YYYY">
                {props.data.created_at}
    </Moment> by {`${props.data.user.profile.first_name} ${props.data.user.profile.last_name}`}</div>
        </div>
    )
}

export default ReviewItem