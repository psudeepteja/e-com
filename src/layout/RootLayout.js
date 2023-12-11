import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Navbar from "../components/Navbar";

function RootLayout() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12} sx={{paddingTop:"0px !important"}}>
				<Navbar />
			</Grid>
			<Grid item xs={12}>
				<main>
					<Outlet />
				</main>
			</Grid>
			<Grid item xs={12}>
				<Footer />
			</Grid>
		</Grid>
	);
}

export default RootLayout;