import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
// import Navbar from "";
import Footer from "../components/Footer";
import Header from "../components/Header"

function RootLayout() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Header />
			</Grid>
			{/* <Grid item xs={12}>
				<Navbar token={token} />
			</Grid> */}
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