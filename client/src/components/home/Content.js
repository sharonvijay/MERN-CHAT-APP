import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import chatBanner from "../../assets/chatBanner.svg";
import { Link as RouterLink } from "react-router-dom";

const Content = () => {
	return (
		<Box mr={6} mb={8} p={4}>
			<Heading as="h1" size="xl" mb={4} pt="10px">
				Welcome to the MERN Chat App!
			</Heading>
			<Text mb={4}>
				This is a MERN stack-based chat application that allows users to
				communicate in real-time.
			</Text>
			<Text>
				Start chatting with friends and explore the exciting features of our
				app.
			</Text>

			<Box mt={4}>
				<img src={chatBanner} alt="Chat Banner" width={400} height={300} />
			</Box>
			<Button
				as={RouterLink}
				to="/chats"
				colorScheme="blue"
				mt={8}
				size="lg"
				fontWeight="bold">
				Start Chatting
			</Button>
		</Box>
	);
};

export default Content;
