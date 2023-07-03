import React from "react";
import {
	AspectRatio,
	Box,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	Image,
	Button,
	Center,
	Input,
	HStack,
} from "@chakra-ui/react";
import { Add, Delete, Remove, ShoppingBag } from "@mui/icons-material";
import useStore from "../hooks/useStore";

export type CartItem = {
	id: string;
	picture: string;
	name: string;
	price: string;
	quantity: number;
};

const Cart = () => {
	const {
		store: { cart },
		setStore,
	} = useStore();

	return (
		<Box
			w="full"
			minW={{ base: "20rem" }}
			minH={"full"}
			h="fit-content"
			backgroundColor="#FFFFFF"
			border="1px solid"
			borderColor="blackAlpha.300"
			display={"flex"}
			flexDir={"column"}
			p={"2rem"}
		>
			<Text fontSize={"2xl"} fontWeight={500} color="blackAlpha.700">
				Shopping Cart
			</Text>
			<TableContainer mt="2rem" maxH={"20rem"} overflowY={"auto"}>
				<Table variant={"simple"}>
					<Thead>
						<Tr>
							<Th textAlign={"center"} verticalAlign={"center"}>
								Picture
							</Th>
							<Th textAlign={"center"} verticalAlign={"center"}>
								Name
							</Th>
							<Th textAlign={"center"} verticalAlign={"center"}>
								Quantity
							</Th>
							<Th textAlign={"center"} verticalAlign={"center"}>
								Price
							</Th>
							<Th textAlign={"center"} verticalAlign={"center"}>
								Remove
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{cart.map((cartItem, index) => {
							return (
								<Tr key={cartItem.name} maxH={"64px"} h="64px">
									<Td textAlign={"center"} verticalAlign={"center"}>
										<AspectRatio w={"64px"} ratio={1}>
											<Image
												src={`localhost:3000/${cartItem.picture}`}
												w="full"
												h="full"
											/>
										</AspectRatio>
									</Td>
									<Td textAlign={"center"} verticalAlign={"center"}>
										<Box h="full">
											<Text fontSize={"lg"} color="blackAlpha.700">
												{cartItem.name}
											</Text>
										</Box>
									</Td>
									<Td textAlign={"center"} verticalAlign={"center"}>
										<Box
											display={"flex"}
											border="1px solid"
											borderColor="blackAlpha.300"
											borderRadius={"8px"}
										>
											<Button
												color="blackAlpha.700"
												borderRightRadius={0}
												onClick={() => {
													setStore((prev) => {
														const temp = { ...prev };

														if (temp.cart[index].quantity > 1) {
															temp.cart[index].quantity -= 1;
														}

														return temp;
													});
												}}
											>
												<Remove color="inherit" />
											</Button>
											<Center minW={"3rem"} flexGrow={1}>
												<Text fontSize={"lg"} color="blackAlpha.700">
													{cartItem.quantity}
												</Text>
											</Center>
											<Button
												color="blackAlpha.700"
												borderLeftRadius={"0"}
												onClick={() => {
													setStore((prev) => {
														const temp = { ...prev };

														temp.cart[index].quantity += 1;

														return temp;
													});
												}}
											>
												<Add color="inherit" />
											</Button>
										</Box>
									</Td>
									<Td textAlign={"center"} verticalAlign={"center"}>
										<Text
											fontSize={"lg"}
											color="blackAlpha.700"
											fontWeight={300}
										>
											{cartItem.price}
										</Text>
									</Td>
									<Td textAlign={"center"} verticalAlign={"center"}>
										<Box>
											<Button
												colorScheme="red"
												onClick={() => {
													setStore((prev) => {
														const temp = { ...prev };

														temp.cart.splice(index, 1);

														return temp;
													});
												}}
											>
												<Delete />
											</Button>
										</Box>
									</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
			<HStack justifyContent={"space-between"}>
				<Text>
					Total:{" "}
					{Intl.NumberFormat("en").format(
						(() => {
							let total = 0;

							cart.forEach((item) => {
								total += Number.parseFloat(item.price) * item.quantity;
							});

							return total;
						})()
					)}
				</Text>
				<Button
					leftIcon={
						<Center h="full">
							<ShoppingBag htmlColor="inherit" />
						</Center>
					}
					mt="2rem"
					maxW={"fit-content"}
					colorScheme="blue"
					variant={"outline"}
					isDisabled
				>
					<Text>Buy</Text>
				</Button>
			</HStack>
		</Box>
	);
};

export default Cart;
