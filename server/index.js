import express from "express";
import dotenv from "dotenv";
import chats from "./data/data.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on Port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error(`Failed to connect to MongoDB: ${error.message}`);
		process.exit(1);
	});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/api/chats", (req, res) => {
	res.send(chats);
});
