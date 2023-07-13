import React from "react";
import {
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Link,
	Icon,
	Center,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import chatBanner from "../assets/chatBanner.svg";
function Homepage() {
	return (
		<Box minHeight="100vh" display="flex" flexDirection="column" bg="gray.50">
			{/* Navbar */}
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

			{/* Body */}
			<Center flex="1" mb={8}>
				<Box>
					<Heading as="h1" size="xl" mb={4}>
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
			</Center>

			{/* Footer */}
			<Box
				bg="rgba(255, 255, 255, 0.5)"
				backdropFilter="blur(10px)"
				py={4}
				px={8}
				boxShadow="md">
				<Flex justifyContent="space-between" alignItems="center">
					{/* Left Side */}
					<Box>
						<Heading as="h3" size="md">
							MERN Chat App
						</Heading>
						<Flex mt={2}>
							<Link href="https://github.com" isExternal mr={2}>
								<Icon as={AiFillGithub} boxSize={5} />
							</Link>
							<Link href="https://twitter.com" isExternal>
								<Icon as={AiFillTwitterCircle} boxSize={5} />
							</Link>
						</Flex>
					</Box>

					{/* Right Side */}
					<Box>
						<Heading as="h3" size="md" textAlign="right">
							Developers
						</Heading>
						<Flex mt={2} justifyContent="flex-end">
							<Link
								href="https://www.linkedin.com/in/sharon-vijay-t/"
								isExternal
								ml={2}>
								Sharon Vijay
							</Link>
							<Link
								href="https://www.linkedin.com/in/trehanpraharsh/"
								isExternal
								ml={2}>
								Praharsh Trehan
							</Link>
						</Flex>
					</Box>
				</Flex>

				{/* Additional Links */}
				<Flex justifyContent="space-between" alignItems="center">
					{/* Left Side */}
					<Text>© 2023 · SRM React Developer LLC</Text>

					{/* Right Side */}
					<Flex>
						<Link href="/terms" mx={2}>
							Terms of Use
						</Link>
						<Link href="/privacy" mx={2}>
							Privacy Policy
						</Link>
						<Link href="/licensing" mx={2}>
							Licensing
						</Link>
						<Link href="/contact" mx={2}>
							Contact
						</Link>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}

export default Homepage;
