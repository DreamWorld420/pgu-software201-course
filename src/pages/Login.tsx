import { Center } from "@chakra-ui/react";
import React from "react";
import LoginCard from "../components/LoginCard";

const Login: React.FC = () => {
	return (
		<Center
			sx={{
				w: "100%",
				h: "100%",
			}}
		>
			<LoginCard />
		</Center>
	);
};

export default Login;
