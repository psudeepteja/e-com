import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import loadable from "@loadable/component";
import RootLayout from "../layout/RootLayout";
import Order from "../pages/order";
import Login from "../pages/login";


const Home = loadable(() =>
	import(/* webpackChunkName: "Cart", webpackPrefetch: true */ "../pages/home")
);
const Search = loadable(() =>
	import(/* webpackChunkName: "Cart", webpackPrefetch: true */ "../pages/search")
);

const Plp = loadable(() =>
	import(/* webpackChunkName: "Cart", webpackPrefetch: true */ "../pages/plp")
);

const Pdp = loadable(() =>
	import(/* webpackChunkName: "Cart", webpackPrefetch: true */ "../pages/pdp")
);
const Cart = loadable(() =>
	import(/* webpackChunkName: "Cart", webpackPrefetch: true */ "../pages/cart")
);
const Error = loadable(() =>
	import(/* webpackChunkName: "Cart", webpackPrefetch: true */ "../pages/error")
);



export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/search/:categoryName",
				element: <Search />,
			},
			{
				path: "/products/category/:categoryId",
				element: <Plp />,
			},
			{
				path: "/products/category/:categoryId/:productId",
				element: <Pdp />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/order-confirmation",
				element: <Order />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
])
