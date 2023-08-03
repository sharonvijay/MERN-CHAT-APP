import React from "react";
import ProfileModal from "../components/miscellaneous/ProfileModal";
import UpdateGroupChatModal from "../components/miscellaneous/UpdateGroupChatModal";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { ChatState } from "../context/ChatProvider";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
	const { user, selectedChat, setSelectedChat } = ChatState();
	return selectedChat ? (
		<>
			<Text
				fontSize={{ base: "28px", md: "30px" }}
				pb={3}
				px={2}
				w="100%"
				fontFamily="Work sans"
				display="flex"
				justifyContent={{ base: "space-between" }}
				alignItems="center">
				<IconButton
					display={{ base: "flex", md: "none" }}
					icon={<ArrowBackIcon />}
					onClick={() => setSelectedChat("")}
				/>

				{true &&
					(!selectedChat.isGroupChat ? (
						<>
							{getSender(user, selectedChat.users)}
							<ProfileModal user={getSenderFull(user, selectedChat.users)} />
						</>
					) : (
						<>
							{selectedChat.chatName.toUpperCase()}
							<UpdateGroupChatModal
								// fetchMessages={fetchMessages}
								fetchAgain={fetchAgain}
								setFetchAgain={setFetchAgain}
							/>
						</>
					))}
			</Text>
		</>
	) : (
		<Box display="flex" alignItems="center" justifyContent="center" h="100%">
			<Text fontSize="3xl" pb={3} fontFamily="Work sans">
				Click on a user to start Chatting
			</Text>
		</Box>
	);
};

export default SingleChat;
