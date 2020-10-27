import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useParams
} from "react-router-dom";

import LandingPage from "./components/app/LandingPage";
import CategoryPage from "./components/app/CategoryPage";
import UserDashbordPage from "./components/app/UserDashbordPage";
import UserProfilePage from "./components/app/UserProfilePage";
import UserAdPage from "./components/app/UserAdPage";
import UserFavouriteAdPage from "./components/app/UserFavouriteAdPage";
import UserPendingAdPage from "./components/app/UserPendingAdPage";
import UserExpriedAdPage from "./components/app/UserExpriedAdPage";
import PostAdPage from "./components/app/PostAdPage";
import PostAdPaymentPage from "./components/app/PostAdPaymentPage";
import AdViewPage from "./components/app/AdViewPage";
import RegistrationFormPage from "./components/app/RegistrationFormPage";
import LoginFormPage from "./components/app/LogInFormPage";
import PostAdSuccessMessagePage from "./components/app/PostAdSuccessMessagePage";
import UpgradeSuccess from "./components/app/UpgradeSuccess";
import Footer from "./components/app/Footer"
import VerificationPage from "./components/app/VerificationPage"
import WithCountry from "./WithCountry";

import { Provider } from "react-redux";
import store from "./redux/store";
import EditAd from "./components/user/EditAd";
import EditAdPage from "./components/app/EditAdPage";

import MessageChatPage from "./components/app/MessageChatPage"
import  MessageListPage  from "./components/app/MessageListPage"
import Subcategory from "./components/app/Subcategory";
import ScrollToTop from "./ScrollToTop";

function App(props) {
	return (
		
			<div className="App">
				<Router>
					<ScrollToTop />
				<Switch>
					<Route {...props} exact path="/" component={WithCountry(LandingPage)} />
					<Route {...props} exact path="/product_list/" component={WithCountry(CategoryPage)} />
					<Route {...props} exact path="/register" component={WithCountry(RegistrationFormPage)} />
					<Route {...props} exact path="/login" component={WithCountry(LoginFormPage)} />
					<Route {...props} exact path="/product_detail/:id" component={WithCountry(AdViewPage)}/>
					<Route {...props} exact path="/subcategory/:category_id" component={WithCountry(Subcategory)}/>
					
						<PrivateRoute
							 {...props}
							exact
							path="/user_dashboard"
							component={WithCountry(UserDashbordPage)}
						/>
						 <PrivateRoute {...props} exact path="/profile" component={WithCountry(UserProfilePage)} />
						<PrivateRoute {...props} exact path="/user_ad" component={WithCountry(UserAdPage)} />
						<PrivateRoute
						 {...props}
							exact
							path="/pending_ad"
							component={WithCountry(UserPendingAdPage)}
						/>
						<PrivateRoute
						 {...props}
							exact
							path="/favourite_ad"
							component={WithCountry(UserFavouriteAdPage)}
						/>
						<PrivateRoute
						 {...props}
							exact
							path="/expried_ad"
							component={WithCountry(UserExpriedAdPage)}
						/>

						<PrivateRoute {...props} exact path="/post_ad" component={WithCountry(PostAdPage)} />
						<PrivateRoute {...props} exact path="/edit_ad/:slug" component={WithCountry(EditAdPage)} />

						<PrivateRoute
						 {...props}
							exact
							path="/payment/:slug/:plan"
							component={WithCountry(PostAdPaymentPage)}
						/>
						<PrivateRoute
						 {...props}
							exact
							path="/post_sucess/:slug/:is_upgradable//:pathname"
							component={WithCountry(PostAdSuccessMessagePage)}
						/>
						<PrivateRoute
						 {...props}
							exact
							path="/upgrade_success"
							component={WithCountry(UpgradeSuccess)}
						/>
						<PrivateRoute
						 {...props}
							exact
							path="/verification"
							component={WithCountry(VerificationPage)}
						/> 
						<PrivateRoute {...props} exact path="/chat"  component={MessageChatPage}/>
						<PrivateRoute {...props} exact path="/messages"  component={MessageListPage}/>
					</Switch>
					<div className="d-none d-lg-block  d-md-none" style={{paddingTop: "50px"}}>
					<Footer/>
					</div>
					<div  className="d-xs-block d-sm-block d-md-block d-lg-none d-xlg-none" style={{paddingTop: "50px" , paddingBottom: "50px"}}>
					<Footer/>
					</div>
					
				</Router>
				
			</div>
	);
}

export default App;
