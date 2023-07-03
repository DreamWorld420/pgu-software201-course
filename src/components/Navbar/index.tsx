import React from "react";
import { Box, Button, Link as CLink, Center, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import useStore from "../../hooks/useStore";

const Navbar: React.FC = () => {
	const location = useLocation();
	const { store, setStore } = useStore();

	const handleLogout = () => {
		setStore({
			token: "",
			username: "",
			cart: [],
		});
		localStorage.clear();
	};

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
			<Box
				display={"flex"}
				flexDir={"row"}
				alignItems={"center"}
				minW={"100px"}
			>
				<Text color="blackAlpha.700" fontWeight={500} fontSize="inherit">
					Hello{", "}
					<Text
						as="span"
						borderBottom={"3px dashed"}
						borderBottomColor={"blue.500"}
					>
						{store?.username}
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
							location.pathname === "/panel/add" ||
							location.pathname === "/panel"
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
				<Text fontSize={"inherit"} color="blackAlpha.700">
					\
				</Text>
				<Link to={"/panel/cart"}>
					<CLink
						pb="0.2rem"
						fontWeight={500}
						fontSize="inherit"
						position={"relative"}
						_hover={{
							textDecor: "none",
							color: "blackAlpha.700",
						}}
						color={
							location.pathname === "/panel/cart"
								? "blackAlpha.700"
								: "blackAlpha.400"
						}
					>
						Cart
						{store.cart.length ? (
							<Center
								position={"absolute"}
								minW="1.5rem"
								w={"fit-content"}
								h="1.5rem"
								fontSize={"sm"}
								backgroundColor={"rgba(255, 0, 0, 0.7)"}
								color="whiteAlpha.800"
								borderRadius={"50%"}
								top={"-.75rem"}
								right={"-1.5rem"}
							>
								{store.cart.length}
							</Center>
						) : null}
					</CLink>
				</Link>
			</Box>
			<Center>
				<Button
					colorScheme="red"
					variant={"ghost"}
					leftIcon={<Logout />}
					onClick={handleLogout}
					size={"sm"}
					maxW={"100px"}
				>
					Logout
				</Button>
			</Center>
		</Box>
	);
};

export default Navbar;
