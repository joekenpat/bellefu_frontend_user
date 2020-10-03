import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAIL,
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_LOGOUT
} from "../types";
import axios from "axios";
import Cookie from "js-cookie";


//USER SIGNIN ACTION PAYLOAD
export const signin = (identifier, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { identifier, password } });
	try {
		const { data } = await axios.post("https://dev.bellefu.com/api/auth/login/challenge/default", {
			identifier,
			password
		});
		const token = data.token;
		if (token) {
			dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
			Cookie.set("user", JSON.stringify(data));
		}
        dispatch({ type: USER_SIGNIN_FAIL, payload: data.errors });
	} catch (error){
        dispatch({type: USER_SIGNIN_FAIL, payload: error.response.data})
      
    }
};

//USER SIGNUP ACTION PAYLOAD
export const signup = (first_name, last_name, username, gender, phone, email, password) => async (dispatch) => {
dispatch({type: USER_SIGNUP_REQUEST, payload: {first_name, last_name, username, gender, phone, email, password}})
try{
    const {data} = await axios.post("https://dev.bellefu.com/api/auth/register", {first_name, last_name, username, gender, phone, email, password} );
    const token = data.token
    if(token) {
        dispatch({type: USER_SIGNUP_SUCCESS, payload: data})
        Cookie.set('user', JSON.stringify(data))
    }
    dispatch({type: USER_SIGNUP_FAIL, payload: data.message})

} catch (error){
     dispatch({type: USER_SIGNUP_FAIL, payload: error.response.data})
   }
}

// UPDATE USER ACTION PAYLOAD
export const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
    const { userSignin: { user } } = getState();
    dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, name, email, password } });
    try {
        const { data } = await axios.put(`/api/users/${userId}`,
            { name, email, password }, {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        });
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        Cookie.set('user', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }
}


//LOGOUT USER ACTION PAYLOAD
export const logout = (dispatch) => {
    Cookie.remove("user")
    dispatch({type: USER_LOGOUT})
}