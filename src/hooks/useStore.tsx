import React, { useContext } from "react";
import StoreContext from "../store";

const useStore = () => {
	const { store, setStore } = useContext(StoreContext);

	return { store, setStore };
};

export default useStore;
