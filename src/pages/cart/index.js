import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, removeItem } from "../../feature/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleIncrement = (id ) => {
    dispatch(increment({ id, quantity: 1 }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id, quantity: 1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };


  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              {cart?.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem>
                    <img
                      alt={item.title}
                      src={item.image}
                      style={{
                        marginRight: "25px",
                        borderRadius: "none !important",
                        width: "80px",
                        height: "80px",
                      }}
                    />
                    <ListItemText
                      primary={item.title}
                      secondary={`Price: $${item.price}`}
                    />
                    <IconButton onClick={() => handleDecrement(item.id, 1)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{item.quantity? item.quantity : 1}</Typography>
                    <IconButton onClick={() => handleIncrement(item.id, 1)}>
                      <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => handleRemoveItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="right">
              Total: ${/* Calculate total here */}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() =>{
                navigate('/order-confirmation')
                dispatch(clearCart())
                }
              }
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
