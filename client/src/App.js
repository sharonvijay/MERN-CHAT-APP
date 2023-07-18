import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";
import "./App.css";
function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Check if the user is authenticated
		const userInfo = localStorage.getItem("userInfo");
		if (userInfo) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route
					path="/signin"
					element={
						isAuthenticated ? (
							<Navigate to="/chats" />
						) : (
							<SignIn setIsAuthenticated={setIsAuthenticated} />
						)
					}
				/>
				<Route
					path="/signup"
					element={
						isAuthenticated ? (
							<Navigate to="/chats" />
						) : (
							<SignUp setIsAuthenticated={setIsAuthenticated} />
						)
					}
				/>
				<Route
					path="/chats"
					element={
						isAuthenticated ? (
							<Chatpage />
						) : (
							<Navigate to="/signin" replace state={{ from: "/chats" }} />
						)
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
