import React, {useEffect} from 'react';
import {fetchCountry, updateUserCountry} from './redux/actions/userCountry';
import Cookie from 'js-cookie';
import {useDispatch, useSelector} from 'react-redux'

export default function WithCountry(WrappedComponent) {
    const HOC = () => {
        const dispatch = useDispatch()
        const userCountry = useSelector((state) => state.userCountry);
        const userSignin = useSelector((state) => state.userSignin);

        const check = () => {
            if(!Cookie.get('country')) {
                if(Object.keys(userCountry).length === 0 && userCountry.constructor === Object) {
                    if(Cookie.get('user')) {
                        const {user} = userSignin;
                        dispatch(updateUserCountry(user.user.location_info))
                    } else {
                        dispatch(fetchCountry())
                    }
                }
            } else {

            }
        }

        useEffect(() => {
            check()
        }, [])

        return (
            <WrappedComponent />
        )
    }
    
    return HOC;
}

