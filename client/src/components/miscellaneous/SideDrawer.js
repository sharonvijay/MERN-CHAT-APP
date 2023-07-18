import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import {
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from "@chakra-ui/menu";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";
// import NotificationBadge from "react-notification-badge";

const SideDrawer = () => {
	// const [search, setSearch] = useState("");
	// const [searchResult, setSearchResult] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [loadingChat, setLoadingChat] = useState(false);
	const { user } = ChatState();
	const navigate = useNavigate();

	const logoutHandler = () => {
		localStorage.removeItem("userInfo");
		navigate("/");
	};
	return (
		<>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				bg="white"
				w="100%"
				p="5px 10px 5px 10px"
				borderWidth="5px">
				<Tooltip label="Search Users to Chat" hasArrow placement="bottom">
					<Button variant="ghost">
						<i className="fas fa-search"></i>
						<Text d={{ base: "none", md: "flex" }} px={4}>
							Search User
						</Text>
					</Button>
				</Tooltip>
				<Text fontSize="2xl" fontFamily="Work sans">
					Muchatlu
				</Text>
				<div>
					<Menu>
						<MenuButton p={1}>
							{/* <NotificationBadge /> */}
							<BellIcon fontSize="2xl" m={1} />
						</MenuButton>
						<MenuList pl={2}></MenuList>
					</Menu>
					<Menu>
						<MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
							<Avatar
								size="sm"
								cursor="pointer"
								name={user.name}
								src={user.pic}
							/>
						</MenuButton>
						<MenuList>
							<ProfileModal user={user}>
								<MenuItem>My Profile</MenuItem>
							</ProfileModal>
							<MenuDivider />
							<MenuItem onClick={logoutHandler}>Logout</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</Box>
		</>
	);
};

export default SideDrawer;
