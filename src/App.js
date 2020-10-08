import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Route, Switch, useParams  } from "react-router-dom";

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
import RegistrationFormPage from "./compnents/app/RegistrationFormPage";
import LoginFormPage from "./compnents/app/LogInFormPage";

//REDUX STATE
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/paid_product_list/" component={CategoryPage} />
					<Route exact path="/register" component={RegistrationFormPage} />
					<Route exact path="/login" component={LoginFormPage} />
					<Route exact path="/product_detail/:id"  component={AdViewPage} />
					<Switch>
						<PrivateRoute
							exact
							path="/user_dashboard"
							component={UserDashbordPage}
						/>
						<PrivateRoute exact path="/profile" component={UserProfilePage} />
						<PrivateRoute exact path="/user_ad" component={UserAdPage} />
						<PrivateRoute exact path="/pending_ad/:id" component={UserPendingAdPage} />
						<PrivateRoute
							exact
							path="/favourite_ad"
							component={UserFavouriteAdPage}
						/>
						<PrivateRoute
							exact
							path="/expried_ad"
							component={UserExpriedAdPage}
						/>
						<PrivateRoute exact path="/post_ad" component={PostAdPage} />
						<PrivateRoute exact path="/user_ad" component={PostAdPaymentPage} />
					</Switch>
				</Router>
			</div>
		</Provider>  
	);
}

export default App;
