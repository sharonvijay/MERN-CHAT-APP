import express from "express";
import dotenv from "dotenv";
import chats from "./data/data.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { Server } from "socket.io";
const app = express();
app.use(express.json());
dotenv.config();

// const PORT = process.env.PORT;
const PORT = 5000;

connectDB()
	// .then(() => {
	// 	app.listen(PORT, () => {
	// 		console.log(`Server is running on Port ${PORT}`);
	// 	});
	// })
	.catch((error) => {
		console.error(`Failed to connect to MongoDB: ${error.message}`);
		process.exit(1);
	});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT, () => {
	console.log(`Server is running on Port ${PORT}`);
});

const io = new Server(server, {
	pingTimeout: 60000,
	cors: {
		origin: "https://maa-muchatlu.netlify.app/",
		// credentials: true,
	},
});

io.on("connection", (socket) => {
	console.log("Connected to socket.io");
	socket.on("setup", (userData) => {
		socket.join(userData._id);
		socket.emit("connected");
	});

	socket.on("join chat", (room) => {
		socket.join(room);
		console.log("User Joined Room: " + room);
	});
	socket.on("typing", (room) => socket.in(room).emit("typing"));
	socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

	socket.on("new message", (newMessageRecieved) => {
		var chat = newMessageRecieved.chat;

		if (!chat.users) return console.log("chat.users not defined");

		chat.users.forEach((user) => {
			if (user._id == newMessageRecieved.sender._id) return;

			socket.in(user._id).emit("message received", newMessageRecieved);
		});
	});

	socket.off("setup", () => {
		console.log("USER DISCONNECTED");
		socket.leave(userData._id);
	});
});
