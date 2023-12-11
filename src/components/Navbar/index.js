import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryApi } from '../../feature/asyncThunk';

const Navbar = () => {
    const { category } = useSelector((state => state.category))
    const dispatch = useDispatch();

    useEffect(() => {
        if(!category.length){
            dispatch(getCategoryApi("products/categories"))
        }
    }, [])

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-around" }}>
                {category.map((item, index) => {
                    return (
                        <Typography key={index} variant="bady1" component={Link} to={`/products/category/${item}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {item.toUpperCase()}
                        </Typography>
                    )
                })}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
