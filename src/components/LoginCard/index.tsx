import {
	Box,
	Button,
	Grid,
	GridItem,
	Input,
	Link,
	Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import axiosInstance from "../../api";
import { toast } from "react-toastify";
import * as Yup from "yup";

const LoginCard: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().required(),
			password: Yup.string().required(),
		}),
		onSubmit(values) {
			setIsLoading(true);
			axiosInstance
				.post("/user/login", values)
				.then(() => {
					toast.success("Login successful");
				})
				.catch(() => {
					toast.error("Login failed");
				})
				.finally(() => {
					setIsLoading(false);
				});
			formik.resetForm();
		},
	});

	return (
		<Box display="flex" flexDir={"column"} rowGap={"2rem"}>
			<Box
				w={{ base: "20rem" }}
				minH={{ base: "20rem" }}
				h="fit-content"
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
				<form onSubmit={formik.handleSubmit}>
					<Grid templateRows={"repeat(3, 1fr)"} rowGap={"1rem"}>
						<GridItem w="100%">
							<Input
								w="full"
								variant={"filled"}
								placeholder="Email"
								borderRadius={"0.25rem"}
								border="1px solid"
								borderColor="blackAlpha.300"
								value={formik.values.email}
								onChange={formik.handleChange("email")}
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
								value={formik.values.password}
								onChange={formik.handleChange("password")}
							/>
						</GridItem>
						<GridItem>
							<Button
								w="full"
								colorScheme="blue"
								isDisabled={!formik.isValid || !formik.dirty}
								type="submit"
								isLoading={isLoading}
							>
								Login
							</Button>
						</GridItem>
					</Grid>
				</form>
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
					Don't have an account?{" "}
					<Link
						color={"blue.400"}
						onClick={() => {
							navigate("/register");
						}}
					>
						Register
					</Link>
				</Text>
			</Box>
		</Box>
	);
};

export default LoginCard;
