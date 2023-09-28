import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/home/NavBar";
import Footer from "../components/home/Footer";
import Content from "../components/home/Content";
import { ChatState } from "../context/ChatProvider";
function Homepage() {
	const navigate = useNavigate();
	const user = ChatState();

	useEffect(() => {
		const userItem = localStorage.getItem("userItem");
		console.log("User Item:", userItem);
		if (userItem) {
			// If the user item exists, redirect the user to the chats page
			navigate("/chats");
		} else {
			// If the user item does not exist, redirect the user to the login page
			navigate("/");
		}
	}, [navigate]);
	return (
		<Container minWidth="100vw" className="Homepage">
			<Box minHeight="100vh" display="flex" flexDirection="column">
				{/* Navbar */}
				<NavBar />

				{/* Body */}
				{/* <Center flex="1" mb={8}> */}
				<Content />

				{/* </Center> */}

				{/* Footer */}
				<Footer />
			</Box>
		</Container>
	);
}

export default Homepage;
