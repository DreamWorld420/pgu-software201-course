import {
	Box,
	Button,
	Grid,
	GridItem,
	Input,
	Link,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LoginCard: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Box display="flex" flexDir={"column"} rowGap={"2rem"}>
			<Box
				w={{ base: "20rem" }}
				h={{ base: "20rem" }}
				backgroundColor="#FFFFFF"
				border="1px solid"
				borderColor="blackAlpha.300"
				p="1.5rem"
			>
				<Text
					mb={"3rem"}
					textAlign={"center"}
					fontSize={"3xl"}
					fontFamily={"Roboto"}
					fontWeight={"medium"}
				>
					Login
				</Text>
				<Grid templateRows={"repeat(3, 1fr)"} rowGap={"1rem"}>
					<GridItem w="100%">
						<Input
							w="full"
							variant={"filled"}
							placeholder="Email"
							borderRadius={"0.25rem"}
							border="1px solid"
							borderColor="blackAlpha.300"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</GridItem>
					<GridItem>
						<Input
							w="full"
							variant={"filled"}
							placeholder="Password"
							borderRadius={"0.25rem"}
							border="1px solid"
							borderColor="blackAlpha.300"
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</GridItem>
					<GridItem>
						<Button
							w="full"
							colorScheme="blue"
							isDisabled={!(email && password)}
						>
							Login
						</Button>
					</GridItem>
				</Grid>
			</Box>
			<Box
				w={{ base: "20rem" }}
				h={{ base: "5rem" }}
				backgroundColor="#FFFFFF"
				border="1px solid"
				borderColor="blackAlpha.300"
				p="1.5rem"
				display={"flex"}
				flexDir={"column"}
				justifyContent={"center"}
			>
				<Text textAlign={"center"} fontSize={"md"} fontFamily={"Roboto"}>
					Don't have an account? <Link color={"blue.400"}>Register</Link>
				</Text>
			</Box>
		</Box>
	);
};

export default LoginCard;
