import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Login from "./Login";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import RootContainer from "./layouts/RootContainer";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<RootContainer>
				<RouterProvider router={router} />
			</RootContainer>
		</ChakraProvider>
	</React.StrictMode>
);
