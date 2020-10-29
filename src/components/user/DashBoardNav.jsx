import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import {GoDashboard} from 'react-icons/go';
import {Link} from 'react-router-dom';
import Cookie from 'js-cookie';
import Preloader from './Preloader';

import { useEffect } from 'react';
import {
    AiOutlineUser,
    AiOutlineGift,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineAccountBook,
    AiOutlineSetting
} from 'react-icons/ai';
import {IoMdTime, IoIosLogIn} from 'react-icons/io';
import {GoVerified} from 'react-icons/go';
import {MdDateRange} from 'react-icons/md';

const {Translate} = require('@google-cloud/translate').v2;


export default function DashBoardNav(props) {
    const [text, setText] = useState([
        "Links",
        'Classified',
		"Dashboard",
        'Profile Public View',
        'Ads',
		'My Ads',
		'Favourite Ads',
		'Pending Ads',
		'Expired Ads',
		'Account',
		'Message',
		'Verification',
		'Settings',
		'Logout',
	])
	const [originalText, setOriginalText] = useState([
		"Links",
        'Classified',
		"Dashboard",
        'Profile Public View',
        'Ads',
		'My Ads',
		'Favourite Ads',
		'Pending Ads',
		'Expired Ads',
		'Account',
		'Message',
		'Verification',
		'Settings',
		'Logout',
	])


	const trans = async() => {
		const translate = await new Translate({key: props.id})
		if(props.language === 'en'){
			setText(originalText)
		} else {

			translate.translate(text, props.language)
				.then((res) => {
					setText(res[0])
				
			}).catch(() => {
				setText(originalText)
				})
		}
	}
	  
	useEffect( () => {
		trans()
	}, [props.id, props.language])
    return (
        <div>
            <Card className="border-0">
                <Card.Header className="border-0" style={{backgroundColor: '#76ba1b'}}>
                    <b style={{color: 'white'}}>{text[0]}</b>
                </Card.Header>
                <div className="p-3">
                    <h6 className="p-3" style={styles.head}>
                    {text[1]}
                    </h6>
                    <ul style={styles.list}>
                        <Link to="/user_dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3 linking" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <GoDashboard className="mr-3" style={styles.icon} />
                                {text[2]}
                            </li>
                        </Link>
                        <Link to="/profile" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <AiOutlineUser className="mr-3" style={styles.icon} />
                                {text[3]}
                            </li>
                        </Link>
                    </ul>
                    <h6 className="p-3" style={styles.head}>
                    {text[4]}
                    </h6>
                    <ul style={styles.list}>
                        <Link to="/user_ad" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <AiOutlineGift className="mr-3" style={styles.icon} />
                                {text[5]}
                            </li>
                        </Link>
                        <Link to="/favourite_ad" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <AiOutlineHeart className="mr-3" style={styles.icon} />
                                {text[6]}
                            </li>
                        </Link>
                        <Link to="/pending_ad" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <IoMdTime className="mr-3" style={styles.icon} />
                                {text[7]}
                            </li>
                        </Link>

                        <Link to="/expried_ad" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <MdDateRange className="mr-3" style={styles.icon} />
                                {text[8]}
                            </li>
                        </Link>
                    </ul>
                    <h6 className="p-3" style={styles.head}>
                    {text[9]}
                    </h6>
                    <ul style={styles.list}>
                        <Link to="/messages" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <AiOutlineMessage className="mr-3" style={styles.icon} />
                                {text[10]}
                            </li>
                        </Link>
                        <Link to="/verification" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                                <GoVerified className="mr-3" style={styles.icon} />
                                {text[11]}
                            </li>
                        </Link>
                        <li className="pb-3" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                            <AiOutlineSetting className="mr-3" style={styles.icon} />
                            {text[12]}
                        </li>
                        <li onClick={logout} className="pb-0" onMouseOver={listHover} onMouseLeave={listHoverNone}>
                            <IoIosLogIn className="mr-3" style={styles.icon} />
                            {text[13]}
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    );
}

//LOGOUT
const logout = () => {
    Cookie.remove('user');
    window.location.reload();
};

const listHover = e => {
    e.target.style.color = '#ffa500';
};

const listHoverNone = e => {
    e.target.style.color = 'black';
};

const styles = {
    list: {
        listStyleType: 'none',
        fontSize: '15px',
        opacity: '0.7',
        cursor: 'pointer',
        font: 'bold'
    },
    head: {
        fontSize: '0.9em',
        color: '#ffa500'
    },
    icon: {
        color: '#ffa500'
    }
};
