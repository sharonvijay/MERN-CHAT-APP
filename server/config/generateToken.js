import jwt from "jsonwebtoken";

const generateToken = (id) => {
	return jwt.sign({ id }, "SHARONVIJAY", {
		expiresIn: "30d",
	});
};

export default generateToken;
