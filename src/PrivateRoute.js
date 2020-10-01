import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, userSignin, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				userSignin.isAuthenticated === true ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
)

PrivateRoute.proptoTypes = {
	userSignin: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	userSignin: state.userSignin
});

export default connect(mapStateToProps)(PrivateRoute);
