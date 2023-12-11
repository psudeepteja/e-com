import React from 'react';
import { Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, categoryId }) => {
    const productNameStyle = {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
    };
    const navigate = useNavigate();

    return (
        <Card style={{ maxWidth: 300, margin: 16, cursor:"pointer" }}
            onClick={() => {
                navigate(`/products/category/${categoryId}/${product.id}`,
                    { state: product })
            }}>
            <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
            />
            <CardContent>
                <Typography variant="body1" style={productNameStyle}>{product.title}</Typography>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                    <Rating value={product.rating.rate} precision={0.5} readOnly />{" "}{" "} {product.rating.count} ratings
                </Typography>

                <Typography variant="h6" color="primary">
                    ${product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
