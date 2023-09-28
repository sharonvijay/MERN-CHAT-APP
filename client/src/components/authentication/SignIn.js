import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import {
	Box,
	Heading,
	Card,
	CardBody,
	Center,
	Text,
	Link,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Stack, VStack, HStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import loginBanner from "../../assets/loginBanner.jpg";
import { ChatState } from "../../context/ChatProvider";
const SignIn = () => {
	const [show, setShow] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);

	const handleClick = () => setShow(!show);

	const toast = useToast();

	const navigate = useNavigate();

	const { updateUser } = ChatState();

	const submitHandler = async () => {
		setLoading(true);
		if (!email || !password) {
			toast({
				title: "Please Fill all the Feilds",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
			return;
		}

		// console.log(email, password);
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios.post(
				"https://mernapp-u0sa.onrender.com/api/user/login",
				{ email, password },
				config
			);

			console.log(JSON.stringify(data));
			toast({
				title: "Login Successful",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			localStorage.setItem("userInfo", JSON.stringify(data));
			updateUser(data);
			setLoading(false);
			navigate("/chats");
		} catch (error) {
			toast({
				title: "Error Occured!",
				description: error.response.data.message,
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
		}
	};
	return (
		<Box
			backgroundImage={`url(${loginBanner})`}
			backgroundSize="cover"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			height="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center">
			<Box
				p="4"
				width={{ base: "100%", md: "80%" }}
				maxW={{ base: "100%", md: "800px" }}
				boxShadow="lg"
				borderRadius="md"
				bg="rgba(255, 255, 255, 0.85)"
				backdropFilter="blur(5px)">
				<Center>
					<Stack spacing="4">
						<VStack spacing="6" mt="8">
							<Heading
								as="h1"
								fontWeight="300"
								fontSize="24px"
								letterSpacing="-0.5px">
								Sign in to MernApp
							</Heading>
						</VStack>
						<Card
							bg="#f6f8fa"
							variant="outline"
							borderColor="#d8dee4"
							maxW="308px">
							<CardBody>
								<form>
									<Stack>
										<FormControl id="email" isRequired>
											<FormLabel size="sm">Email address</FormLabel>
											<Input
												placeholder="Enter Email Address"
												type="text"
												bg="white"
												borderColor="#d8dee4"
												size="sm"
												borderRadius="6px"
												onChange={(e) => {
													setEmail(e.target.value);
												}}
											/>
										</FormControl>
										<FormControl id="password" isRequired>
											<HStack justifyContent="space-between">
												<FormLabel size="sm">Password</FormLabel>
												<Button
													as="a"
													href="#"
													variant="link"
													size="xs"
													color="#0969da"
													fontWeight="500">
													Forgot Password?
												</Button>
											</HStack>
											<InputGroup>
												<Input
													placeholder="Enter Password"
													type={show ? "text" : "password"}
													bg="white"
													borderColor="#d8dee4"
													size="sm"
													borderRadius="6px"
													onChange={(e) => {
														setPassword(e.target.value);
													}}
												/>
												<InputRightElement width="4.5rem">
													<Button h="1.75rem" size="sm" onClick={handleClick}>
														{show ? "Hide" : "Show"}
													</Button>
												</InputRightElement>
											</InputGroup>
										</FormControl>
										<Button
											bg="#2da44e"
											color="white"
											size="sm"
											_hover={{ bg: "#2c974b" }}
											_active={{ bg: "#298e46" }}
											onClick={submitHandler}
											isLoading={loading}>
											Sign In
										</Button>
									</Stack>
								</form>
							</CardBody>
						</Card>
						<Card variant="outline" borderColor="#d0d7de">
							<CardBody>
								<Center>
									<HStack fontSize="sm" spacing="1">
										<Text>New to Muchatlu?</Text>
										<Link
											as={RouterLink}
											to="/signup"
											color="#0969da"
											_hover={{ textDecoration: "underline" }}>
											Create an Account.
										</Link>
									</HStack>
								</Center>
							</CardBody>
						</Card>
					</Stack>
				</Center>
			</Box>
		</Box>
	);
};

export default SignIn;
