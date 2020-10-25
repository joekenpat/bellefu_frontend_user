import React, {useEffect} from 'react';
import {fetchCountry, updateUserCountry} from './redux/actions/userCountry';
import Cookie from 'js-cookie';
import {useDispatch, useSelector} from 'react-redux'

export default function WithCountry(WrappedComponent) {
    const HOC = (props) => {
        const dispatch = useDispatch()
        const userCountry = useSelector((state) => state.userCountry);

        const check = () => {
            if(!Cookie.get('country')) {
                if(Object.keys(userCountry).length === 0 && userCountry.constructor === Object) {
                    if(Cookie.get('user')) {
                        
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
            <WrappedComponent {...props} userCountry={userCountry} />
        )
    }
    
    return HOC;
}

