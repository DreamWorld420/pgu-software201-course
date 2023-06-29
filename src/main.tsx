import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Login from "./pages/Login";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import RootContainer from "./layouts/RootContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Register from "./pages/Register";
import Add from "./pages/Add";
import Panel from "./pages/Panel";
import Search from "./pages/Search";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "register",
		element: <Register />,
	},
	{
		path: "panel",
		element: <Panel />,
		children: [
			{
				index: true,
				element: <Add />,
			},
			{
				path: "add",
				element: <Add />,
			},
			{
				path: "search",
				element: <Search />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>

			<RootContainer>
				<RouterProvider router={router} />
			</RootContainer>
		</ChakraProvider>
	</React.StrictMode>
);
