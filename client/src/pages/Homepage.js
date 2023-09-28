import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import NavBar from "../components/home/NavBar";
import Footer from "../components/home/Footer";
import Content from "../components/home/Content";
import { ChatState } from "../context/ChatProvider";
function Homepage() {
	const { user, updateUser } = ChatState();

	useEffect(() => {
		if (!user) {
			const userInfo = JSON.parse(localStorage.getItem("userInfo"));
			if (userInfo) {
				updateUser(userInfo);
			}
		}
	}, [user, updateUser]);
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
