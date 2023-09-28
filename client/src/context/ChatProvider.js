import { createContext, useContext, useState, useEffect } from "react";
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
	const [selectedChat, setSelectedChat] = useState();
	const [user, setUser] = useState();
	const [notification, setNotification] = useState([]);
	const [chats, setChats] = useState();

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem("userInfo"));
		setUser(userInfo);
		console.log("ChatProvider " + userInfo.token);
	}, []);

	const updateUser = (user) => {
		setUser(user);
	};

	return (
		<ChatContext.Provider
			value={{
				selectedChat,
				setSelectedChat,
				user,
				setUser,
				notification,
				setNotification,
				chats,
				setChats,
				updateUser,
			}}>
			{children}
		</ChatContext.Provider>
	);
};

const ChatState = () => {
	return useContext(ChatContext);
};

export { ChatProvider, ChatState };
