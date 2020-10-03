import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";


  const PrivateRoute = ({ component: Component, userSignin, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				Cookie.get('user') ? (
					<Component {...props} />
				) : (
					<Redirect to={{
						pathname: "/login",
						state: {from: props.location}
					}}
					/>
				)
			}
		/>
)

export default (PrivateRoute)
