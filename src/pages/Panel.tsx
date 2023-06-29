import React from "react";
import { Outlet } from "react-router-dom";
import PanelLayout from "../layouts/PanelLayout";

const Panel = () => {
	return (
		<PanelLayout>
			<Outlet />
		</PanelLayout>
	);
};

export default Panel;
