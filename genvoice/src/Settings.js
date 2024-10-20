import React, { useState } from "react";
import Sidebar from "./Sidebar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Settings() {
	const [errorMsg, setErrorMsg] = useState();
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const toggleConfirmPasswordVisibility = () => {
		setConfirmPasswordVisible(!confirmPasswordVisible);
	};

	const handlePasswordReset = async (e) => {
		e.preventDefault();
		if (!newPassword || !confirmPassword) {
			setErrorMsg("Please fill in all fields");
			return;
		} else if (newPassword !== confirmPassword) {
			setErrorMsg("New password and confirm password do not match");
			return;
		} else {
			try {
				const storedUser = JSON.parse(
					localStorage.getItem("userCredentials")
				);
				if (storedUser) {
					storedUser.password = newPassword;
					localStorage.setItem(
						"userCredentials",
						JSON.stringify(storedUser)
					);
				}

				setNewPassword("");
				setConfirmPassword("");
				setErrorMsg("");

				alert("Password reset successful!");
			} catch (error) {
				setErrorMsg("An error occurred while resetting the password.");
			}
		}
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<div className="background">
			<Sidebar />
			<div className="default-container">
				<div
					className="card"
					style={{
						padding: "50px",
						boxSizing: "border-box",
						height: "50%",
					}}
				>
					<label className="login-header">Change Password</label>
					<form onSubmit={handlePasswordReset}>
						<label
							className="input-label"
							style={{ fontSize: "x-large" }}
							htmlFor="newPassword"
						>
							New Password
						</label>

						<div
							className={
								(errorMsg && !newPassword) ||
								(errorMsg && newPassword !== confirmPassword)
									? "error-password-container"
									: "password-container"
							}
						>
							<input
								type={passwordVisible ? "text" : "password"}
								placeholder="New password"
								name="newPassword"
								className="password-input-field"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								style={{ outline: "none" }}
							/>
							<button
								style={{
									backgroundColor: "#fff",
									border: "none",
									padding: 0,
									marginTop: "4px",
								}}
								type="button" // ensure this button doesn't submit the form
								onClick={togglePasswordVisibility}
							>
								{passwordVisible ? (
									<VisibilityOffIcon />
								) : (
									<VisibilityIcon />
								)}
							</button>
						</div>

						<label
							className="input-label"
							style={{ fontSize: "x-large" }}
							htmlFor="confirmPassword"
						>
							Confirm Password
						</label>
						<div
							className={
								(errorMsg && !confirmPassword) ||
								(errorMsg && newPassword !== confirmPassword)
									? "error-password-container"
									: "password-container"
							}
						>
							<input
								type={
									confirmPasswordVisible ? "text" : "password"
								}
								placeholder="Confirm password"
								name="confirmPassword"
								className="password-input-field"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
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
								type="button" // ensure this button doesn't submit the form
								onClick={toggleConfirmPasswordVisibility}
							>
								{confirmPasswordVisible ? (
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
							Reset Password
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Settings;
