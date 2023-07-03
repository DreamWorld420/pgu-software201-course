import {
	AspectRatio,
	Box,
	Button,
	Center,
	GridItem,
	Image,
	Input,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Block, SearchRounded, ShoppingCart } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import axiosInstance from "../api";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";

const TEST_ONLY_SEARCH_RESULT = [
	{
		postid: "Cs5d0V5oQCA",
		name: "تیشرت سوپر لش نگین دار کد 551",
		price: "320000",
		caption:
			"تیشرت سوپر لش نگین دار کد 551\nسایز 3XL. 4XL \nپشت چاپ \n\n.................................................................\nقیمت 320.000 تومان \n.....................‌‌‌‌‌‌‌...........................................\n\nعرض شکم کمتر از عرض سینه هست\n\nسایز 3XL : عرض سینه از زیر بغل 62 سانت. قد از پشت یقه تا پایین کار 86 سانت. \n\nسایز 4XL : عرض سینه از زیر بغل 67 سانت. قد از پشت یقه تا پایین کار 90 سانت. \n\n.................................................................‌\n\n#تک_تیشرت #تیشرت_سفید_لش_استایل #تیشرت_جدید_گنگ_استایل #لش_لانگ_گنگ_بیگ_سایز #تیشرت_سوپر_لش_لانگ",
		username: "tak_tshirt",
		img: "/public/img/posts/3114651748118298478_13688367255.jpg",
	},
	{
		postid: "Cs5d0V5oQCA",
		name: "تیشرت سوپر لش نگین دار کد 551",
		price: "320000",
		caption:
			"تیشرت سوپر لش نگین دار کد 551\nسایز 3XL. 4XL \nپشت چاپ \n\n.................................................................\nقیمت 320.000 تومان \n.....................‌‌‌‌‌‌‌...........................................\n\nعرض شکم کمتر از عرض سینه هست\n\nسایز 3XL : عرض سینه از زیر بغل 62 سانت. قد از پشت یقه تا پایین کار 86 سانت. \n\nسایز 4XL : عرض سینه از زیر بغل 67 سانت. قد از پشت یقه تا پایین کار 90 سانت. \n\n.................................................................‌\n\n#تک_تیشرت #تیشرت_سفید_لش_استایل #تیشرت_جدید_گنگ_استایل #لش_لانگ_گنگ_بیگ_سایز #تیشرت_سوپر_لش_لانگ",
		username: "tak_tshirt",
		img: "/public/img/posts/3114651748118298478_13688367255.jpg",
	},
	{
		postid: "Cs5d0V5oQCA",
		name: "تیشرت سوپر لش نگین دار کد 551",
		price: "320000",
		caption:
			"تیشرت سوپر لش نگین دار کد 551\nسایز 3XL. 4XL \nپشت چاپ \n\n.................................................................\nقیمت 320.000 تومان \n.....................‌‌‌‌‌‌‌...........................................\n\nعرض شکم کمتر از عرض سینه هست\n\nسایز 3XL : عرض سینه از زیر بغل 62 سانت. قد از پشت یقه تا پایین کار 86 سانت. \n\nسایز 4XL : عرض سینه از زیر بغل 67 سانت. قد از پشت یقه تا پایین کار 90 سانت. \n\n.................................................................‌\n\n#تک_تیشرت #تیشرت_سفید_لش_استایل #تیشرت_جدید_گنگ_استایل #لش_لانگ_گنگ_بیگ_سایز #تیشرت_سوپر_لش_لانگ",
		username: "tak_tshirt",
		img: "/public/img/posts/3114651748118298478_13688367255.jpg",
	},
	{
		postid: "Cs5d0V5oQCA",
		name: "تیشرت سوپر لش نگین دار کد 551",
		price: "320000",
		caption:
			"تیشرت سوپر لش نگین دار کد 551\nسایز 3XL. 4XL \nپشت چاپ \n\n.................................................................\nقیمت 320.000 تومان \n.....................‌‌‌‌‌‌‌...........................................\n\nعرض شکم کمتر از عرض سینه هست\n\nسایز 3XL : عرض سینه از زیر بغل 62 سانت. قد از پشت یقه تا پایین کار 86 سانت. \n\nسایز 4XL : عرض سینه از زیر بغل 67 سانت. قد از پشت یقه تا پایین کار 90 سانت. \n\n.................................................................‌\n\n#تک_تیشرت #تیشرت_سفید_لش_استایل #تیشرت_جدید_گنگ_استایل #لش_لانگ_گنگ_بیگ_سایز #تیشرت_سوپر_لش_لانگ",
		username: "tak_tshirt",
		img: "/public/img/posts/3114651748118298478_13688367255.jpg",
	},
];

interface PostResponse {
	postid: string;
	name: string;
	price: string;
	caption: string;
	username: string;
	img: string;
}

const Search: React.FC = () => {
	const [hasSearchedAtLeastOnce, setHasSearchedAtLeastOnce] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [searchResult, setSearchResult] = useState<PostResponse[]>([]);

	const isEmpty = !searchResult.length;
	const { store, setStore } = useStore();

	const formik = useFormik({
		initialValues: {
			searchTerm: "",
		},
		validationSchema: Yup.object({
			searchTerm: Yup.string().required(),
		}),
		onSubmit(values) {
			setIsLoading(true);
			axiosInstance
				.get(`/${values.searchTerm}`)
				.then((res) => {
					setSearchResult(res.data as PostResponse[]);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
			setHasSearchedAtLeastOnce(true);
		},
	});

	const navigate = useNavigate();

	return (
		<VStack h="full" rowGap={"1.5rem"}>
			<Box
				w="full"
				minW={{ base: "20rem" }}
				h="fit-content"
				backgroundColor="#FFFFFF"
				border="1px solid"
				borderColor="blackAlpha.300"
				p="1.5rem"
				display={"flex"}
				flexDir={"row"}
				columnGap={"2rem"}
				as="form"
				onSubmit={formik.handleSubmit}
			>
				<Input
					w="full"
					variant={"filled"}
					placeholder="Search for a shop"
					borderRadius={"0.25rem"}
					border="1px solid"
					borderColor="blackAlpha.300"
					value={formik.values.searchTerm}
					onChange={formik.handleChange("searchTerm")}
				/>
				<Button
					colorScheme="blue"
					type="submit"
					isLoading={isLoading}
					isDisabled={!formik.isValid || !formik.dirty}
				>
					<SearchRounded />
				</Button>
			</Box>
			<Box
				w="full"
				minW={{ base: "20rem" }}
				h="fit-content"
				backgroundColor="#FFFFFF"
				border="1px solid"
				borderColor="blackAlpha.300"
				display={"flex"}
				flexDir={"row"}
				columnGap={"2rem"}
				flexGrow={"1"}
				maxH={"65vh"}
				overflowY={"auto"}
			>
				<Box p={"1rem"} w="full">
					{!hasSearchedAtLeastOnce && isEmpty && (
						<Center w="full" h="full" display={"flex"} flexDir={"column"}>
							<Text
								color="blackAlpha.300"
								fontSize="4xl"
								letterSpacing={".25rem"}
							>
								Start Searching ...
							</Text>
						</Center>
					)}
					{isEmpty && (
						<Center w="full" h="full" display={"flex"} flexDir={"column"}>
							<Text
								color="blackAlpha.300"
								fontSize="4xl"
								letterSpacing={".25rem"}
							>
								No Search Result
							</Text>
						</Center>
					)}
					{!isEmpty && (
						<SimpleGrid columns={3} gap="1rem" h="full">
							{searchResult.map((result) => {
								return (
									<GridItem key={result.postid}>
										<Box
											backgroundColor={"blackAlpha.50"}
											p="1rem"
											border={"1px solid"}
											borderColor={"blackAlpha.50"}
										>
											<AspectRatio
												border={"1px solid"}
												borderColor={"blackAlpha.300"}
												ratio={1}
											>
												<Image src={result.img} />
											</AspectRatio>
											<Box mt="0.75rem" display={"flex"} flexDir={"column"}>
												<Text fontWeight={500}>{result.name}</Text>
												<Text fontWeight={300}>Price in Toman:</Text>
												<Text fontWeight={500}>
													{Intl.NumberFormat("en").format(
														Number.parseFloat(result.price)
													)}
												</Text>
											</Box>
											<Text fontSize={"14px"} mt="0.5rem">
												{result.caption}
											</Text>
											<Box
												display={"flex"}
												justifyContent={"space-between"}
												mt="1rem"
											>
												<Button
													colorScheme="blue"
													size={"sm"}
													variant={"outline"}
													onClick={() => {
														navigate(`/panel/post/${result.postid}`);
													}}
												>
													Read more
												</Button>
												<Button
													colorScheme="green"
													size={"sm"}
													leftIcon={
														<ShoppingCart style={{ fontSize: "14px" }} />
													}
													onClick={() => {
														setStore((prev) => {
															const temp = { ...prev };

															temp.cart.push({
																id: result.postid,
																name: result.name,
																price: result.price,
																quantity: 1,
																picture: result.img,
															});

															return temp;
														});
													}}
												>
													Add to cart
												</Button>
											</Box>
										</Box>
									</GridItem>
								);
							})}
						</SimpleGrid>
					)}
				</Box>
			</Box>
		</VStack>
	);
};

export default Search;
