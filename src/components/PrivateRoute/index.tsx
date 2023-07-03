import React, { useEffect } from "react";
import useStore from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
	const { store } = useStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!store?.token) {
			navigate("/");
		}
	}, [store?.token]);

	return <>{children}</>;
};

export default PrivateRoute;
