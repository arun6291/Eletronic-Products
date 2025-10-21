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
  Chip,
  Tabs,
  Tab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import reviewsData from "../data/reviewsData"; // your reviews
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomButton from "../../src/components/CustomButtons"; // if using custom butto

function TabPanel({ children, value, index }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{ mt: 2 }}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  if (!product) return <Typography>Product not found</Typography>;

  const discount =
    Math.round(((product.originalPrice - product.finalPrice) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate("/order-summary");
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        {/* Left Column: Images */}
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

        {/* Right Column: Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {product.title}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>by {product.brand}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating value={product.rateCount} readOnly precision={0.5} />
            <Typography sx={{ ml: 1, color: "text.secondary" }}>
              ({product.ratings} ratings)
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#d32f2f" }}>
              ₹{product.finalPrice.toLocaleString("en-IN")}
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "text.disabled" }}>
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </Typography>
            <Chip label={`${discount}% OFF`} color="success" size="small" sx={{ fontWeight: 600 }} />
          </Box>

          <Typography sx={{ mt: 2, mb: 1 }}>{product.info}</Typography>
          <Divider sx={{ my: 2 }} />

          {/* Product Details */}
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

          {/* Quantity */}
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

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.2, borderRadius: "8px" }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button> 
          </Box>

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabIndex}
              onChange={(e, newValue) => setTabIndex(newValue)}
              aria-label="product detail tabs"
            >
              <Tab label="Overview" />
              <Tab label="Specifications" />
              <Tab label="Reviews" />
            </Tabs>
          </Box>

          {/* Tab Panels */}
          <TabPanel value={tabIndex} index={0}>
            <Typography>{product.info}</Typography>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Typography>Category: {product.category}</Typography>
            <Typography>Type: {product.type}</Typography>
            <Typography>Connectivity: {product.connectivity}</Typography>
            {/* Add more specifications if needed */}
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            {reviewsData.length === 0 ? (
              <Typography>No reviews yet.</Typography>
            ) : (
              reviewsData.map((review) => (
                <Box key={review.id} sx={{ mb: 2, borderBottom: "1px solid #ccc", pb: 1 }}>
                  <Typography variant="subtitle2">
                    {review.name} - {review.rateCount}⭐
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {review.date}
                  </Typography>
                  <Typography>{review.review}</Typography>
                </Box>
              ))
            )}
          </TabPanel>

          // Inside your ProductDetailPage component, after the tab panels:
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Related Products
            </Typography>

            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={4} // adjust based on screen size
              slidesToScroll={1}
              responsive={[
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 900, settings: { slidesToShow: 2 } },
                { breakpoint: 600, settings: { slidesToShow: 1 } },
              ]}
            >
              {productsData
                .filter((p) => p.category === product.category && p.id !== product.id)
                .map((related) => (
                  <Box
                    key={related.id}
                    sx={{
                      p: 1,
                      textAlign: "center",
                      border: "1px solid #eee",
                      borderRadius: 2,
                      backgroundColor: "#111",
                      color: "#fff",
                    }}
                  >
                    <Box
                      component="img"
                      src={related.images[0]}
                      alt={related.title}
                      sx={{ width: "100%", height: 150, objectFit: "contain", mb: 1 }}
                    />
                    <Typography variant="subtitle2">{related.title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      ₹{related.finalPrice.toLocaleString()}
                    </Typography>
                    <CustomButton
                      label="View"
                      onClick={() => navigate(`/product/${related.id}`)}
                      variant="Shop Now"
                    />
                  </Box>
                ))}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
