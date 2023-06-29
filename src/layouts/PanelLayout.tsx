import { Box, Container } from "@chakra-ui/react";
import React, { Children } from "react";
import Navbar from "../components/Navbar";

export interface PanelLayoutProps {
	children: React.ReactNode;
}

const PanelLayout: React.FC<PanelLayoutProps> = (props) => {
	const { children } = props;
	return (
		<Container maxW={"4xl"} h="100vh">
			<Box display={"flex"} flexDir={"column"} h="100%">
				<Navbar />
				<Box flexGrow={1} mb="2rem">
					{children}
				</Box>
			</Box>
		</Container>
	);
};

export default PanelLayout;
