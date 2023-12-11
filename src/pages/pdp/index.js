import { Button, Container, Grid, Paper, Rating, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../feature/cartSlice";

function Pdp() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, description, image, price, rating ,id} = location.state
  const { cart } = useSelector((state) => state.cart)

  const handleCart = () => {
    const exstingItem = cart.find(i => i.id === id)
    if(!exstingItem){
    dispatch(addToCart([location.state]))
    }
  }
  const handleGoToCart = () => {
    navigate('/cart')
  }

  return (
    <div>
      <Container>
        <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img src={image} alt={title} style={{ maxWidth: '100%', width: 500, height: 500 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" style={{ marginTop: 20, marginBottom: 20 }}>
                {title}
              </Typography>
              <Typography variant="body1">{description}</Typography>
              <Typography variant="h6" color="primary" style={{ marginTop: 20, marginBottom: 20 }}>
                ${price}
              </Typography>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                <Rating value={rating.rate} precision={0.5} readOnly />{" "}{" "} {rating.count} ratings
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={handleCart}>
                Add to Cart
              </Button>
              {cart.length > 0 &&
                <Button variant="contained" color="secondary" style={{ marginTop: 20, marginLeft: 20 }} onClick={()=>{handleGoToCart(id)}}>
                  Go to Cart
                </Button>
              }
            </Grid>
          </Grid>
        </Paper>
      </Container>

    </div>
  );
}

export default Pdp;
