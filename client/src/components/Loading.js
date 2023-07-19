import React from "react";
import { Spinner, Center } from "@chakra-ui/react";

const Loading = () => {
	return (
		<Center height="100vh">
			<Spinner size="xl" color="blue.500" />
		</Center>
	);
};

export default Loading;
