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
	const { user, updateUser } = ChatState();

	useEffect(() => {
		if (!user) {
			const userInfo = JSON.parse(localStorage.getItem("userInfo"));
			if (userInfo) {
				updateUser(userInfo);
				navigate("/chats");
			} else {
				navigate("/signin");
			}
		}
	}, [user, navigate, updateUser]);
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
