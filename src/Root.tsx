import React from "react";
import RootContainer from "./layouts/RootContainer";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
	return (
		<RootContainer>
			<Outlet />
		</RootContainer>
	);
};

export default Root;
