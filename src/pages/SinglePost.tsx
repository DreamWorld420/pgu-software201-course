import {
	Center,
	Box,
	HStack,
	AspectRatio,
	Image,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api";

const SinglePost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState<any>(null);

	useEffect(() => {
		axiosInstance.get(`/p/${postId}`).then((res) => {
			setPost(res.data);
		});
	}, [postId]);

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
			<HStack>
				<AspectRatio minH={"20rem"} h="full" ratio={1}>
					<Image src={post?.img} />
				</AspectRatio>
				<Box>
					<Text fontSize="3xl">{post?.name}</Text>
					{post?.username ? <Text>@{post?.username}</Text> : null}
					<Text>{post?.price}</Text>
					<Text>{post?.caption}</Text>
				</Box>
			</HStack>
		</Box>
	);
};

export default SinglePost;
