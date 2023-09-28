import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";

const Chatpage = () => {
	const [fetchAgain, setFetchAgain] = useState(false);
	const { user, updateUser } = ChatState();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			const userInfo = JSON.parse(localStorage.getItem("userInfo"));
			console.log("ChatPage " + userInfo);
			if (userInfo) {
				updateUser(userInfo);
			} else {
				navigate("/signin");
			}
		}
	}, [user, navigate, updateUser]);

	return (
		<div style={{ width: "100%" }}>
			{user && <SideDrawer />}
			<Box
				display="flex"
				justifyContent="space-between"
				w="100%"
				h="91.5vh"
				p="10px">
				{user && <MyChats fetchAgain={fetchAgain} />}
				{user && (
					<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
				)}
			</Box>
		</div>
	);
};

export default Chatpage;
