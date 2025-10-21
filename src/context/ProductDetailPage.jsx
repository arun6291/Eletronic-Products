import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Rating,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const navigate = useNavigate();

  if (!product) return <Typography>Product not found</Typography>;

  const discount =
    Math.round(((product.originalPrice - product.finalPrice) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate("/order-summary");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* Left Section: Image Gallery */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={mainImage}
            alt={product.title}
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: 2,
              objectFit: "contain",
            }}
          />

          {/* Thumbnails */}
          <Box sx={{ display: "flex", mt: 2, gap: 1, flexWrap: "wrap" }}>
            {product.images.map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setMainImage(img)}
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: 1,
                  border: mainImage === img ? "2px solid #1976d2" : "1px solid #ccc",
                  objectFit: "contain",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}
          </Box>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {product.title}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            by {product.brand}
          </Typography>

          {/* Rating */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating value={product.rateCount} readOnly precision={0.5} />
            <Typography sx={{ ml: 1, color: "text.secondary" }}>
              ({product.ratings} ratings)
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Price Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#d32f2f" }}>
              ₹{product.finalPrice.toLocaleString("en-IN")}
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through",
                color: "text.disabled",
                fontSize: "1rem",
              }}
            >
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </Typography>
            <Typography sx={{ color: "green", fontWeight: 600 }}>
              {discount}% off
            </Typography>
          </Box>

          {/* Info */}
          <Typography sx={{ mt: 2, mb: 1 }}>{product.info}</Typography>

          <Divider sx={{ my: 2 }} />

          {/* Key Details */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              Category: <b>{product.category}</b>
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              Type: <b>{product.type}</b>
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
              Connectivity: <b>{product.connectivity}</b>
            </Typography>
          </Box>

          {/* Quantity Control */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography sx={{ mr: 2 }}>Quantity:</Typography>
            <IconButton onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ mx: 2 }}>{qty}</Typography>
            <IconButton onClick={() => setQty((q) => q + 1)}>
              <AddIcon />
            </IconButton>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, px: 4, py: 1.2, borderRadius: "8px" }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
