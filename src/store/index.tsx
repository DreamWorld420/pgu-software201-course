import React, { createContext } from "react";

export type CartItem = {
	id: string;
	picture: string;
	name: string;
	price: string;
	quantity: number;
};

export interface Store {
	token: string;
	username: string;
	cart: CartItem[];
}

export interface StoreContextValue {
	store: Store;
	setStore: React.Dispatch<React.SetStateAction<Store>>;
}

const initialValues: StoreContextValue = {
	store: {
		token: "",
		username: "",
		cart: [],
	},
	setStore: () => null,
};

const StoreContext = createContext(initialValues);

export const StoreProvider = (props: { children: React.ReactNode }) => {
	const [store, setStore] = React.useState<Store>({
		token: "",
		username: "",
		cart: [],
	});

	return (
		<StoreContext.Provider value={{ store, setStore }}>
			{props.children}
		</StoreContext.Provider>
	);
};

export default StoreContext;
