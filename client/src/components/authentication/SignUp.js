import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import {
	Box,
	Heading,
	Card,
	CardBody,
	Center,
	useToast,
	Link,
	Text,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Stack, VStack, HStack } from "@chakra-ui/layout";
import loginBanner from "../../assets/loginBanner.jpg";
const SignUp = () => {
	const [showone, setShowone] = useState(false);
	const [showtwo, setShowtwo] = useState(false);
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmpassword, setConfirmpassword] = useState();
	const [pic, setPic] = useState();
	const [picLoading, setPicLoading] = useState(false);

	const toast = useToast();
	const navigate = useNavigate();

	const handleClickone = () => setShowone(!showone);
	const handleClicktwo = () => setShowtwo(!showtwo);

	const postDetails = (pics) => {
		setPicLoading(true);
		if (pics === undefined) {
			toast({
				title: "Please Select an Image!",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		console.log(pics);
		if (pics.type === "image/jpeg" || pics.type === "image/png") {
			const data = new FormData();
			data.append("file", pics);
			data.append("upload_preset", "chat-app");
			data.append("cloud_name", "sharonvijay");
			fetch("https://api.cloudinary.com/v1_1/sharonvijay/image/upload", {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					setPic(data.url.toString());
					console.log(data.url.toString());
					setPicLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setPicLoading(false);
				});
		} else {
			toast({
				title: "Please Select an Image!",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setPicLoading(false);
			return;
		}
	};

	const submitHandler = async () => {
		setPicLoading(true);
		if (!name || !email || !password || !confirmpassword) {
			toast({
				title: "Please Fill all the Feilds",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setPicLoading(false);
			return;
		}
		if (password !== confirmpassword) {
			toast({
				title: "Passwords Do Not Match",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		console.log(name, email, password, pic);
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			const { data } = await axios.post(
				"/api/user",
				{
					name,
					email,
					password,
					pic,
				},
				config
			);
			console.log(data);
			toast({
				title: "Registration Successful",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			localStorage.setItem("userInfo", JSON.stringify(data));
			setPicLoading(false);
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
			setPicLoading(false);
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
								Sign Up to MernApp
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
										<FormControl id="name" isRequired>
											<FormLabel size="sm">Name</FormLabel>
											<Input
												placeholder="Enter Your Name"
												type="text"
												bg="white"
												borderColor="#d8dee4"
												size="sm"
												borderRadius="6px"
												onChange={(e) => {
													setName(e.target.value);
												}}
											/>
										</FormControl>
										<FormControl id="email" isRequired>
											<FormLabel size="sm">Email Address</FormLabel>
											<Input
												placeholder="Enter Your Email"
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
											<FormLabel size="sm">Password</FormLabel>
											<InputGroup>
												<Input
													placeholder="Enter password"
													type={showone ? "text" : "password"}
													bg="white"
													borderColor="#d8dee4"
													size="sm"
													borderRadius="6px"
													onChange={(e) => {
														setPassword(e.target.value);
													}}
												/>
												<InputRightElement width="4.5rem">
													<Button
														h="1.75rem"
														size="sm"
														onClick={handleClickone}>
														{showone ? "Hide" : "Show"}
													</Button>
												</InputRightElement>
											</InputGroup>
										</FormControl>
										<FormControl id="confirmpassword" isRequired>
											<FormLabel size="sm">Confirm Password</FormLabel>
											<InputGroup>
												<Input
													placeholder="Enter password"
													type={showtwo ? "text" : "password"}
													bg="white"
													borderColor="#d8dee4"
													size="sm"
													borderRadius="6px"
													onChange={(e) => {
														setConfirmpassword(e.target.value);
													}}
												/>
												<InputRightElement width="4.5rem">
													<Button
														h="1.75rem"
														size="sm"
														onClick={handleClicktwo}>
														{showtwo ? "Hide" : "Show"}
													</Button>
												</InputRightElement>
											</InputGroup>
										</FormControl>
										<FormControl id="pic">
											<FormLabel>Upload your Picture</FormLabel>
											<Input
												type="file"
												p={1.5}
												accept="image/*"
												onChange={(e) => postDetails(e.target.files[0])}
											/>
										</FormControl>
										<Button
											bg="#2da44e"
											color="white"
											size="sm"
											_hover={{ bg: "#2c974b" }}
											_active={{ bg: "#298e46" }}
											onClick={submitHandler}
											isLoading={picLoading}>
											Sign Up
										</Button>
									</Stack>
								</form>
							</CardBody>
						</Card>
						<Card variant="outline" borderColor="#d0d7de">
							<CardBody>
								<Center>
									<HStack fontSize="sm" spacing="1">
										<Text>Already Have Account?</Text>
										<Link
											as={RouterLink}
											to="/signin"
											color="#0969da"
											_hover={{ textDecoration: "underline" }}>
											Sign In
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

export default SignUp;
