import React, { useState } from "react";
import {
	Center,
	GridItem,
	SimpleGrid,
	Box,
	Input,
	Button,
	Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import axiosInstance from "../api";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Add: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			username: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required(),
		}),
		onSubmit(values) {
			setIsLoading(true);

			axiosInstance
				.get(`/p/collect/${values.username}`)
				.then(() => {
					toast.success(`${values.username} added successfully`);
				})
				.catch(() => {
					toast.error("something bad happened!");
				});
			formik.resetForm();
		},
	});
	return (
		<Center h="full">
			<Box
				minW={{ base: "20rem" }}
				w="fit-content"
				h="fit-content"
				backgroundColor="#FFFFFF"
				border="1px solid"
				borderColor="blackAlpha.300"
				p="1.5rem"
			>
				<Text
					color={"blackAlpha.700"}
					// textAlign={"center"}
					fontSize={"xl"}
					fontFamily={"Roboto"}
					fontWeight={"medium"}
					mb="0.5rem"
				>
					Add a shop
				</Text>
				<Text color={"blackAlpha.700"} fontSize={16}>
					add an Instagram shop page to your account
				</Text>
				<Box onSubmit={formik.handleSubmit} mt="1.5rem" as="form">
					<SimpleGrid columns={2} columnGap={"1rem"}>
						<GridItem>
							<Input
								w="full"
								variant={"filled"}
								placeholder="Shop username"
								borderRadius={"0.25rem"}
								border="1px solid"
								borderColor="blackAlpha.300"
								value={formik.values.username}
								onChange={formik.handleChange("username")}
							/>
						</GridItem>
						<GridItem>
							<Button w="full" colorScheme="blue" type="submit">
								Add
							</Button>
						</GridItem>
					</SimpleGrid>
				</Box>
			</Box>
		</Center>
	);
};

export default Add;
