import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Home() {
	return (
		<div className="background">
			<Sidebar />
			<div className="default-container">
				<div
					className="card"
					style={{
						padding: "50px",
						boxSizing: "border-box",
					}}
				>
					<label className="login-header">About Myself</label>
					<span style={{ fontSize: "x-large", textAlign: "justify" }}>
						Hello! I'm Cheryl, a Year 3 Information Systems major at
						the National University of Singapore. <br />
						<br />
						My passion lies in challenging myself to build
						innovative solutions that make a difference in both
						digital and physical spaces. With hands-on experience in
						technologies such as React, Next.js, Firebase, SQL,
						HTML, CSS, JavaScript, Java, and Jakarta EE, I enjoy
						creating user-friendly interfaces and impactful digital
						products. I believe that technology should not only
						solve problems but also enhance user experiences. This
						drive motivates me to continually learn and experiment
						with new ideas, whether it’s through school projects or
						personal initiatives. I'm particularly enthusiastic
						about front-end development, where I can blend my
						creativity with technical skills to design intuitive
						applications. <br />
						<br />
						In addition to my academic pursuits, I enjoy engaging in
						team sports like Netball and Tchoukball. The camaraderie
						and teamwork that come with these activities fuel my
						collaborative spirit, making me a better team player in
						both sports and tech.
						<br />
						<br />
						I'm always eager for opportunities to gain more
						experience, learn from others, and contribute to
						projects that positively impact users.
					</span>
				</div>
			</div>
		</div>
	);
}

export default Home;
