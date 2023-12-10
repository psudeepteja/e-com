import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import loadable from "@loadable/component";
import RootLayout from "../layout/RootLayout";


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
// const Cart = loadable(() =>
// 	import(/* webpackChunkName: "Cart", webpackPrefetch: true */ "../pages/cart")
// );



export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		// errorElement: <ErrorPage />,
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
				path: "plp/:categoryName/:categoryId",
				element: <Plp />,
			},
			{
				path: "pdp/:productId",
				element: <Pdp />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
])
