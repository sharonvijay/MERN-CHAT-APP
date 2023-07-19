import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Box
			bg="rgba(255, 255, 255, 0.5)"
			backdropFilter="blur(10px)"
			py={4}
			px={8}
			boxShadow="md">
			<Flex justifyContent="space-between" alignItems="center">
				<Box>
					<Heading as="h2" size="xl" color="blue.500">
						MERN Chat App
					</Heading>
				</Box>
				<Flex>
					<Button
						as={RouterLink}
						to="/signin"
						colorScheme="blue"
						mr={4}
						variant="outline">
						Sign In
					</Button>
					<Button as={RouterLink} to="/signup" colorScheme="blue">
						Sign Up
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default NavBar;
