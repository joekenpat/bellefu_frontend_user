import {LOAD_USER_COUNTRY, UPDATE_USER_COUNTRY} from '../types';
import Cookie from 'js-cookie';
import axios from "axios";

export const loadCountry = (country) => ({
    type: LOAD_USER_COUNTRY,
    country
})

export const updateCountry = (country) => ({
    type: UPDATE_USER_COUNTRY,
    country
})

export const fetchCountry = () => {
    return (dispatch) => {
        try {
            fetch('https://dev.bellefu.com/api/location/info')
            .then((res) => res.json())
            .then((data) => {
                dispatch(loadCountry(data.location_info))
                Cookie.set('country', JSON.stringify(data.location_info))
            })
        } catch (error){
            console.log(error)
        }
    }
}

export const updateUserCountry = (data) => (dispatch) => {
    dispatch(updateCountry(data))
    Cookie.remove('country')
    Cookie.set('country', JSON.stringify(data))
}