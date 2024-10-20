import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Settings from "./Settings";
import AuthRoute from "./AuthRoute";
import React, { useEffect } from "react";

function App() {
	useEffect(() => {
		const initialCredentials = {
			username: "genvoice",
			password: "GenVoice123!",
		};
		if (!localStorage.getItem("userCredentials")) {
			localStorage.setItem(
				"userCredentials",
				JSON.stringify(initialCredentials)
			);
		}
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />

				<Route element={<AuthRoute />}>
					<Route path="/home" element={<Home />} />
				</Route>
				<Route element={<AuthRoute />}>
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
