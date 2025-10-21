// src/pages/OrderSummaryPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderSummaryPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const originalPrice = cartItems.reduce(
    (acc, item) => acc + item.originalPrice * item.quantity,
    0
  );

  const discountedPrice = cartItems.reduce(
    (acc, item) => acc + item.finalPrice * item.quantity,
    0
  );

  const discount = originalPrice - discountedPrice;

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, p: 4, gap: 4 }}>
      {/* Left Section - Cart Items */}
      <Box sx={{ flex: 2 }}>
        <Typography variant="h5" gutterBottom>
          Your Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #333",
                py: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  width="80"
                  style={{ borderRadius: "8px" }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#aaa", textDecoration: "line-through" }}>
                    ₹{item.originalPrice}
                  </Typography>
                  <Typography sx={{ color: "#00ff99" }}>₹{item.finalPrice}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="inherit"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      color="inherit"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <IconButton
                      color="error"
                      sx={{ ml: 1 }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>

      {/* Right Section - Order Summary */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#111",
          color: "#fff",
          p: 3,
          borderRadius: "12px",
          height: "fit-content",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Order Summary ({cartItems.length} items)
        </Typography>
        <Divider sx={{ mb: 2, bgcolor: "#444" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Original Price</Typography>
          <Typography>₹{originalPrice.toLocaleString()}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Discount</Typography>
          <Typography sx={{ color: "#00ff99" }}>
            -₹{discount.toLocaleString()}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Delivery</Typography>
          <Typography sx={{ color: "#00ff99" }}>Free</Typography>
        </Box>

        <Divider sx={{ my: 2, bgcolor: "#444" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Total Price</Typography>
          <Typography variant="h5">₹{discountedPrice.toLocaleString()}</Typography>
        </Box>

        <Button
          variant="contained"
          color="error"
          sx={{
            width: "100%",
            mt: 3,
            fontSize: "1rem",
            textTransform: "none",
          }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummaryPage;
