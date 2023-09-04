import React from "react";
import { Box, Flex, Heading, Link, Icon, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
	return (
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
						MernApp
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
	);
};

export default Footer;
