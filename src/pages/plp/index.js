import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from '@mui/material';
import { getProductsApi } from "../../feature/asyncThunk";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";

function Plp() {
  const {products} = useSelector((state)=> state.product)
  const dispatch = useDispatch();
  const { categoryId } = useParams()
  useEffect(() => {
    dispatch(getProductsApi(`/products/category/${categoryId}`))
  }, [categoryId])

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} categoryId={categoryId} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Plp;
