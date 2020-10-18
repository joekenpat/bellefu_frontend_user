import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Cookie from "js-cookie"



import {
    userSigninReducer,
    userSignupReducer,
    userUpdateReducer,
    searchFilterRuducer
} from './reducers/userReducer'


const user = Cookie.getJSON("user") || null

// const user = signin

export const initialState = {
    userSignin: { user},  
}

const  reducers = combineReducers({
     //USER STORE
     userSignin: userSigninReducer,
     userSignup: userSignupReducer,
     userUpdate: userUpdateReducer,
     porductSearchFilter:searchFilterRuducer,
 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,initialState,  composeEnhancer(applyMiddleware(thunk)))


export default store;