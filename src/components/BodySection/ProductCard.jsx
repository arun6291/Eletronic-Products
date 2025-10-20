import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const productsData = [
  { id: 1, name: "Apple iPhone 15", category: "Mobile" },
  { id: 2, name: "Samsung Galaxy S24", category: "Mobile" },
  { id: 3, name: "Sony Headphones", category: "Electronics" },
  { id: 4, name: "Nike Running Shoes", category: "Footwear" },
];

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // 🔍 Handle Search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = productsData.filter((p) =>
      p.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  // 🔄 Reset Filters
  const handleReset = () => {
    setSearch("");
    setFilteredProducts(productsData);
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* 🔍 Search + Reset */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Search Products"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearch}
          sx={{ flexGrow: 1, minWidth: 240 }}
        />
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<RestartAltIcon />}
          onClick={handleReset}
        >
          Reset Filters
        </Button>
      </Box>

      {/* 🧱 Product List */}
      <Grid container spacing={2}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <Grid item xs={12} sm={6} md={3} key={prod.id}>
              <Card sx={{ textAlign: "center", p: 1 }}>
                <CardContent>
                  <Typography variant="h6">{prod.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {prod.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography sx={{ ml: 2, mt: 2 }}>No products found</Typography>
        )}
      </Grid>
    </Box>
  );
}
