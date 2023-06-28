import React from "react";
import { Box, Theme } from "@chakra-ui/react";

export interface RootContainerProps {
	children: React.ReactNode;
}

const RootContainer: React.FC<RootContainerProps> = (props) => {
	const { children } = props;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100vw",
				height: "100vh",
				backgroundColor: "#FAFAFA",
			}}
		>
			{children}
		</Box>
	);
};

export default RootContainer;
