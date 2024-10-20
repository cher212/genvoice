import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Sidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const Menus = [
		{
			title: "Home",
			link: "/home",
		},
		{
			title: "Settings",
			link: "/settings",
		},
	];

	const handleLogout = () => {
		console.log(localStorage.getItem("authToken"));
		localStorage.removeItem("authToken");
		console.log(localStorage.getItem("authToken"));
		navigate("/login");
	};

	return (
		<div className="sidebar">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "calc(100vh - 110px)",
				}}
			>
				<ul
					style={{
						listStyleType: "none",
						marginLeft: "0",
						padding: "10px 5px",
						marginTop: "0",
					}}
				>
					{Menus.map((Menu, index) => (
						<li
							key={index}
							className={`sidebar-tabs ${
								location.pathname === Menu.link ? "active" : ""
							}`}
						>
							<Link
								style={{ textDecoration: "none" }}
								className="sidebar-text"
								to={Menu.link}
							>
								{Menu.title}
							</Link>
						</li>
					))}
				</ul>
				<div
					style={{
						listStyleType: "none",
						marginLeft: "0",
						paddingLeft: "5px",
						paddingRight: "5px",
						marginTop: "0",
					}}
				>
					<button
						className="sidebar-tabs"
						style={{
							border: "none",
							background: "#fff",
							cursor: "pointer",
						}}
						onClick={handleLogout}
					>
						<PowerSettingsNewIcon
							style={{
								width: "20px",
								height: "20px",
								padding: "5px",
							}}
						/>
						<label
							className="sidebar-text"
							style={{ cursor: "pointer" }}
						>
							Log Out
						</label>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
