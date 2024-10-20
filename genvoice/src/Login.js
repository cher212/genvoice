import React, { useState } from "react";
import "./App.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
	const [errorMsg, setErrorMsg] = useState();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const storedUser = JSON.parse(localStorage.getItem("userCredentials"));

		if (!username || !password) {
			setErrorMsg("Please fill in all fields");
		} else if (
			username === storedUser.username &&
			password === storedUser.password
		) {
			localStorage.setItem("authToken", "token");
			navigate("/home");
			setErrorMsg("");
			return;
		} else {
			setErrorMsg("Invalid username or password");
			console.log("invalid: ", username, password);
			console.log(
				storedUser.username,
				" and password: ",
				storedUser.password
			);
		}
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<div className="background">
			<div className="login-container">
				<div className="login-card">
					<div className="login-header">
						<label> Login</label>
						<form onSubmit={handleLogin}>
							<label className="input-label" htmlFor="username">
								Username
							</label>
							<input
								name="username"
								className={
									errorMsg
										? "error-field"
										: "auth-input-field"
								}
								placeholder="Enter username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>

							<label className="input-label" htmlFor="password">
								Password
							</label>
							<div
								className={
									errorMsg
										? "error-password-container"
										: "password-container"
								}
							>
								<input
									type={passwordVisible ? "text" : "password"}
									placeholder="Enter password"
									name="password"
									className="password-input-field"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									style={{ outline: "none" }}
								/>
								<button
									style={{
										backgroundColor: "#fff",
										border: "none",
										padding: 0,
										marginTop: "4px",
									}}
									type="button"
									onClick={togglePasswordVisibility}
								>
									{passwordVisible ? (
										<VisibilityOffIcon />
									) : (
										<VisibilityIcon />
									)}
								</button>
							</div>

							{errorMsg && (
								<div className="error-msg">{errorMsg}</div>
							)}
							<button className="auth-button" type="submit">
								Login
							</button>
						</form>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Login;
