import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter , Route, Switch } from "react-router-dom";

import LandingPage from "./compnents/app/LandingPage";
import CategoryPage from "./compnents/app/CategoryPage";
import UserDashbordPage from "./compnents/app/UserDashbordPage";
import UserProfilePage from "./compnents/app/UserProfilePage";
import UserAdPage from "./compnents/app/UserAdPage";
import UserFavouriteAdPage from "./compnents/app/UserFavouriteAdPage";
import UserPendingAdPage from "./compnents/app/UserPendingAdPage";
import UserExpriedAdPage from "./compnents/app/UserExpriedAdPage";
import PostAdPage from "./compnents/app/PostAdPage";
import PostAdPaymentPage from "./compnents/app/PostAdPaymentPage";
import AdViewPage from "./compnents/app/AdViewPage";
import RegistrationFormPage from "./compnents/app/RegistrationFormPage"
import  LoginFormPage from "./compnents/app/LogInFormPage"

//REDUX STATE
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
			<BrowserRouter>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/product_list" component={CategoryPage} />
					<Route exact path="/register" component={RegistrationFormPage} />
					<Route exact path="/login" component={LoginFormPage} />

					{/* <UserProfilePage/> */}
					{/* <UserAdPage/> */}
					{/* <UserFavouriteAdPage/> */}
					{/* <UserPendingAdPage/> */}
					{/* <UserExpriedAdPage /> */}
					{/* <PostAdPage /> */}
					{/* <PostAdPaymentPage/> */}
					{/* <AdViewPage /> */}
					<Switch>
						<PrivateRoute
							exact
							path="/user_dashoard"
							component={UserDashbordPage}
						/>
					</Switch>
					</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
