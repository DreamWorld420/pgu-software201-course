import React from "react";
import { Box, Button, Link as CLink, Center, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const location = useLocation();

	return (
		<Box
			h="3rem"
			my="2rem"
			display={"flex"}
			flexDir={"row"}
			justifyContent={"space-between"}
			fontSize={18}
			borderBottom={"1px solid"}
			pb="1.25rem"
			borderColor={"blackAlpha.300"}
		>
			<Box display={"flex"} flexDir={"row"} alignItems={"center"}>
				<Text color="blackAlpha.700" fontWeight={500} fontSize="inherit">
					Hello{" "}
					<Text
						as="span"
						borderBottom={"3px dashed"}
						borderBottomColor={"blue.500"}
					>
						Kasra
					</Text>
				</Text>
			</Box>
			<Box
				display="flex"
				flexDir={"row"}
				columnGap={"2rem"}
				as="nav"
				alignItems={"center"}
			>
				<Link to={"/panel/add"}>
					<CLink
						pb="0.2rem"
						fontWeight={500}
						fontSize="inherit"
						_hover={{
							textDecor: "none",
							color: "blackAlpha.700",
						}}
						color={
							location.pathname === "/panel/add"
								? "blackAlpha.700"
								: "blackAlpha.400"
						}
					>
						Add
					</CLink>
				</Link>
				<Text fontSize={"inherit"} color="blackAlpha.700">
					\
				</Text>
				<Link to={"/panel/search"}>
					<CLink
						pb="0.2rem"
						fontWeight={500}
						fontSize="inherit"
						_hover={{
							textDecor: "none",
							color: "blackAlpha.700",
						}}
						color={
							location.pathname === "/panel/search"
								? "blackAlpha.700"
								: "blackAlpha.400"
						}
					>
						Search
					</CLink>
				</Link>
			</Box>
			<Center>
				<Button colorScheme="blue">Logout</Button>
			</Center>
		</Box>
	);
};

export default Navbar;
