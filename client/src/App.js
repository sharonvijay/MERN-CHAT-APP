import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import SignIn from "../src/components/authentication/SignIn";
import SignUp from "../src/components/authentication/SignUp";
import "./App.css";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/chats" element={<Chatpage />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
