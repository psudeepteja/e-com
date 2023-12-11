import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Order = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom sx={{margin:"20px"}}>
                Order Placed Successfully
            </Typography>
            <Typography sx={{margin:"20px"}}>
                Thank you for your purchase! Your order has been placed successfully.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                sx={{margin:"20px"}}
            >
                Continue Shopping
            </Button>
        </Container>
    );
};

export default Order;
