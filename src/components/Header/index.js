import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from '../Search';
import { useSelector } from 'react-redux';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export default function Header() {
    const { cart } = useSelector((state) => state.cart);
    const navigate = useNavigate()

    return (
        <AppBar position="static"
            sx={{ backgroundColor: "white", color: "black" }}
        >
            <Toolbar>
                <Typography style={{ flexGrow: 1, textAlign: "center" }} onClick={()=>{navigate('/')}} >
                    <AnalyticsIcon sx={{ height: "40px", width: "40px", marginTop: "5px" }} />
                    <Typography sx={{ marginTop: "-10px" }}>Sudeep</Typography>
                </Typography>
                <SearchBar />
                <Button color="inherit" component={Link} to="/login">
                    Login
                </Button>
                <Button color="inherit" component={Link} to="/cart">
                    <Badge
                        badgeContent={cart.length || 0}
                        color="primary"
                    >
                        <ShoppingCartIcon />
                    </Badge>
                </Button>
            </Toolbar>
        </AppBar>
    );
}
