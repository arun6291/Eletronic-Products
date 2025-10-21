// src/components/ProductsPage.jsx
import React, { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import productsData from "../data/productsData";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const ProductsFilterPage = () => {
  const [sortType, setSortType] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => setSortType(e.target.value);

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    // Filter by Brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((prod) =>
        selectedBrands.includes(prod.brand)
      );
    }

    // Filter by Category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (prod) => prod.category === selectedCategory
      );
    }

    // Sort logic
    switch (sortType) {
      case "price-low-high":
        filtered.sort((a, b) => a.finalPrice - b.finalPrice);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.finalPrice - a.finalPrice);
        break;
      case "top-rated":
        filtered.sort((a, b) => b.rateCount - a.rateCount);
        break;
      case "latest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedBrands, selectedCategory, sortType]);

  const uniqueBrands = [...new Set(productsData.map((p) => p.brand))];
  const uniqueCategories = ["All", ...new Set(productsData.map((p) => p.category))];

  return (
    <>
    <Header/>
    <Box sx={{ display: "flex", backgroundColor: "#111", color: "#fff", minHeight: "100vh" }}>
      {/* LEFT SIDEBAR */}
      <Box
        sx={{
          width: "260px",
          p: 3,
          borderRight: "1px solid #333",
          backgroundColor: "#181818",
        }}
      >
        {/* SORT BY */}
        <Typography variant="h6" gutterBottom sx={{ color: "#a9afc3" }}>
          Sort By
        </Typography>
        <FormControl fullWidth variant="outlined" size="small" sx={{ mb: 3 }}>
          <InputLabel sx={{ color: "#a9afc3" }}>Select</InputLabel>
          <Select
            value={sortType}
            onChange={handleSortChange}
            label="Select"
            sx={{
              color: "#a9afc3",
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#555" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#f44336" },
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="latest">Latest</MenuItem>
            <MenuItem value="top-rated">Top Rated</MenuItem>
            <MenuItem value="price-low-high">Price (Lowest First)</MenuItem>
            <MenuItem value="price-high-low">Price (Highest First)</MenuItem>
          </Select>
        </FormControl>

        <Divider sx={{ my: 2, backgroundColor: "#333" }} />

        {/* FILTER BY BRAND */}
        <Typography variant="h6" gutterBottom sx={{ color: "#a9afc3" }}>
          Filter By Brand
        </Typography>
        <FormGroup>
          {uniqueBrands.map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  sx={{
                    color: "#a9afc3",
                    "&.Mui-checked": { color: "#a9afc3" },
                  }}
                />
              }
              label={brand}
            />
          ))}
        </FormGroup>

        <Divider sx={{ my: 2, backgroundColor: "#333" }} />

        {/* CATEGORY FILTER */}
        <Typography variant="h6" gutterBottom sx={{ color: "#a9afc3" }}>
          Category
        </Typography>
        <RadioGroup
          value={selectedCategory}
          onChange={handleCategoryChange}
          name="category"
        >
          {uniqueCategories.map((cat) => (
            <FormControlLabel
              key={cat}
              value={cat}
              control={
                <Radio
                  sx={{
                    color: "#a9afc3",
                    "&.Mui-checked": { color: "#a9afc3" },
                  }}
                />
              }
              label={cat}
            />
          ))}
        </RadioGroup>
      </Box>

      {/* PRODUCT GRID */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  color: "#fff",
                  borderRadius: 2,
                  "&:hover": { transform: "scale(1.02)", transition: "0.3s" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.images[0]}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {product.info}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>
                    <Box component="span" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      ₹{product.finalPrice}
                    </Box>{" "}
                    <Box
                      component="span"
                      sx={{
                        textDecoration: "line-through",
                        color: "#777",
                        ml: 1,
                      }}
                    >
                      ₹{product.originalPrice}
                    </Box>
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#d00404",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#d00404" },
                    }}
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    <Footer/>
    </>
  );
};

export default ProductsFilterPage;
