import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Cookie from "js-cookie"



import {
    userSigninReducer,
    userSignupReducer,
    userUpdateReducer,
    searchFilterRuducer
} from './reducers/userReducer';

import {
    userCountry,
} from './reducers/userCountry'

import {
    languagee,
} from './reducers/language'


const user = Cookie.getJSON("user") || null
const country = Cookie.getJSON('country') || {}
const userLanguage = Cookie.getJSON('language') || 'en'

// const user = signin

export const initialState = {
    userSignin: { user},
    userCountry: country,
    language: userLanguage
}

const  reducers = combineReducers({
     //USER STORE
     userSignin: userSigninReducer,
     userSignup: userSignupReducer,
     userUpdate: userUpdateReducer,
     porductSearchFilter:searchFilterRuducer,
     userCountry: userCountry,
     language: languagee
 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,initialState,  composeEnhancer(applyMiddleware(thunk)))


export default store;