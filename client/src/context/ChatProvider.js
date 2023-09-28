import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
	const [selectedChat, setSelectedChat] = useState();
	const [user, setUser] = useState();
	const [notification, setNotification] = useState([]);
	const [chats, setChats] = useState();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
	// 	setUser(userInfo);

	// 	// if (!userInfo) {
	// 	// 	navigate("/signin");
	// 	// }
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

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
