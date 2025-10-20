import * as React from 'react';
import { Box, Tabs, Tab, Typography, Grid, Rating } from "@mui/material";
import { useState } from "react";
import productsData from '../../data/productsData';
import CustomButton from "../CustomButtons"; // 👈 your custom button

function ProductTabsGrid() {
    const [selectedTab, setSelectedTab] = useState("All");

    const tabNames = ["All", "Headphones", "Earphones", "Earbuds", "Neckbands"];

    const buttonText = "Add To Cart";

    const handleTabChange = (event, newValue) => {
        setSelectedTab(tabNames[newValue]);
    };

    const getFilteredProducts = () => {
        // ✅ Show only 5-star rated products
        let filtered = productsData.filter(product => product.rateCount === 5);

        // ✅ Filter by category only if it's not "All"
        if (selectedTab !== "All") {
            filtered = filtered.filter(product => product.category === selectedTab);
            // Optional: limit for category tabs
            filtered = filtered.slice(0, 8); // 2 rows of 4
        }

        // ✅ If "All", return all filtered products (no slice)
        return filtered;
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    color: "#a9afc3",
                    py: 2,
                    mt: 16,
                    textAlign: "center",
                    fontSize: '2rem', // ~40px
                    fontWeight: 600,
                }}
            >
                Top Products
            </Typography>


            <Box sx={{ width: "100%", py: 4, textAlign: "center" }}>
                {/* Tabs */}
                <Box sx={{ width: "100%", mb: 4 }}>
                    <Tabs
                        value={tabNames.indexOf(selectedTab)}
                        onChange={handleTabChange}
                        centered
                        textColor="inherit"
                        indicatorColor="secondary"
                    >
                        {tabNames.map(tab => (
                            <Tab key={tab} label={tab} />
                        ))}
                    </Tabs>
                </Box>

                <Box sx={{ flexGrow: 1, px: 3, mx: 2 }}>
                    {/* Products Grid */}
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="left">
                        {filteredProducts.map(product => (
                            <Grid item key={product.id} size={{ xs: 2, sm: 6, md: 3 }}>
                                <Box sx={{
                                    textAlign: "left",
                                    color: "#a9afc3",
                                    border: "1px solid #333",
                                    borderRadius: 2,
                                }}>
                                    <Box
                                        component="img"
                                        src={product.images[0]}
                                        alt={product.title}
                                        sx={{
                                            textAlign: "center",
                                            background: '#161819',
                                            maxWidth: 200,
                                        }}
                                    />
                                    <div sx={{p: 4}}>
                                        {/* ⭐ Rating directly under image */}
                                        <Rating
                                            name="read-only"
                                            value={product.rateCount}
                                            precision={0.5}
                                            readOnly
                                            sx={{
                                                mt: 1,
                                                display: "flex",
                                                width: '100%',
                                                fontSize: '12px',
                                                "& .MuiRating-iconFilled": {
                                                    color: "#ff0000", // gold stars
                                                },
                                                "& .MuiRating-iconEmpty": {
                                                    color: "#555", // grey for unfilled
                                                },
                                            }}
                                        />

                                        <Typography
                                            variant="body1"
                                            sx={{ mt: 1, fontWeight: 600 }}
                                        >
                                            {product.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ mt: 1, fontWeight: 500, minHeight: "40px", borderBottom: "1px solid #a9afc3", }}
                                        >
                                            {product.info}
                                        </Typography>

                                        <Box sx={{ display: "flex", gap: 1, py: 2 }}>
                                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                ₹{product.finalPrice}
                                            </Typography>
                                            {product.originalPrice && (
                                                <Typography
                                                    variant="body2"
                                                    sx={{ textDecoration: "line-through" }}
                                                >
                                                    ₹{product.originalPrice}
                                                </Typography>
                                            )}
                                        </Box>
                                        <CustomButton
                                            label={buttonText} // was 'text' before 
                                            variant={buttonText} // maps to color inside getColor()
                                            sx={{ mt: 1, backgroundColor: "#d00404" }}
                                        >
                                            Add To Product
                                        </CustomButton>
                                    </div>
                                </Box>
                            </Grid>
                        ))}

                        {/* Browse All Products Card */}
                        <Grid item xs={2} sm={6} md={3}>
                            <Box
                                onClick={() => navigate("/productfilter")} // replace with your target page
                                sx={{
                                    textAlign: "center",
                                    color: "#a9afc3",
                                    border: "1px solid #333",
                                    borderRadius: 2,
                                    p: 2,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 0 15px rgba(255,255,255,0.2)",
                                        transform: "translateY(-5px)",
                                    },
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                                    Browse All Products
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Explore our full collection
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


            </Box>
        </div>

    );
}


export default ProductTabsGrid;