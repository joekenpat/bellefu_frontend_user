import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./compnents/app/LandingPage";
import CategoryPage from "./compnents/app/CategoryPage";
import UserDashbordPage from "./compnents/app/UserDashbordPage";
import UserProfilePage from "./compnents/app/UserProfilePage"
import UserAdPage from "./compnents/app/UserAdPage"
import UserFavouriteAdPage from "./compnents/app/UserFavouriteAdPage";
import 	UserPendingAdPage from "./compnents/app/UserPendingAdPage";
import UserExpriedAdPage from "./compnents/app/UserExpriedAdPage"
import PostAdPage  from "./compnents/app/PostAdPage";
import PostAdPaymentPage from "./compnents/app/PostAdPaymentPage";
import AdViewPage from "./compnents/app/AdViewPage";

function App() {
	return (
		<div className="App">
			 {/* <LandingPage/> */}
			{/* <CategoryPage /> */}
			{/* <UserDashbordPage /> */}
			{/* <UserProfilePage/> */}
			{/* <UserAdPage/> */}
			{/* <UserFavouriteAdPage/> */}
			{/* <UserPendingAdPage/> */}
			{/* <UserExpriedAdPage /> */}
			{/* <PostAdPage /> */}
			{/* <PostAdPaymentPage/> */}
			<AdViewPage />
		</div>
	);
}

export default App;
