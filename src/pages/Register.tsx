import React, { useState } from "react";
import {
	Center,
	Box,
	Text,
	Input,
	GridItem,
	Button,
	Grid,
	Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../api";
import { toast } from "react-toastify";

const Register: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			username: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required(),
			email: Yup.string().required(),
			password: Yup.string().required(),
		}),
		onSubmit(values) {
			setIsLoading(true);
			axiosInstance
				.post("/user/register", values)
				.then(() => {
					navigate("/");
					toast.success("Register successful");
				})
				.catch((err) => {
					toast.error("Register failed");
				})
				.finally(() => {
					setIsLoading(false);
				});
			formik.resetForm();
		},
	});

	return (
		<Center w="100vw" h="100vh">
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
						Register
					</Text>
					<form onSubmit={formik.handleSubmit}>
						<Grid templateRows={"repeat(3, 1fr)"} rowGap={"1rem"}>
							<GridItem>
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
							<GridItem w="100%">
								<Input
									w="full"
									variant={"filled"}
									placeholder="Username"
									borderRadius={"0.25rem"}
									border="1px solid"
									borderColor="blackAlpha.300"
									value={formik.values.username}
									onChange={formik.handleChange("username")}
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
									Register
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
						Have an account?{" "}
						<Link
							color={"blue.400"}
							onClick={() => {
								navigate("/");
							}}
						>
							Login
						</Link>
					</Text>
				</Box>
			</Box>
		</Center>
	);
};

export default Register;
