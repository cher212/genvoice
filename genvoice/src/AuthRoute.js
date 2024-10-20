import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
	const token = localStorage.getItem("authToken");

	return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
