import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import productsData from '../../data/productsData';


function FeaturedProduct() {
    const sliderProducts = productsData.slice(0, 5);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,        // number of products visible
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        arrows: false,
        centerMode: true,
        appendDots: (dots) => {
            // Limit dots to maximum 5
            const limitedDots = dots.slice(0, 5);
            return <ul style={{ margin: "0px" }}>{limitedDots}</ul>;
        },
    };

    return (
        <Box sx={{
            py: 6,
            mt: 4,
            px: 2,
            height: 400,
            position: 'relative',
            "& .slick-dots li button:before": {
                color: "#d00404",       // default dot color
                opacity: 1,
            },
            "& .slick-dots li.slick-active button:before": {
                color: "#a9afc3",          // active dot color
            },
        }}>
            <Typography
                variant="h2"
                sx={{ color: "#a9afc3", 
                    py: 6, 
                    textAlign: "center",
                    fontSize: '2rem', // ~40px
                    fontWeight: 600,
                }}
            >
                Featured Products
            </Typography>

            <Slider {...settings}>
                {productsData.map((product) => (
                    <Box
                        key={product.id}
                        className="product-slide"
                        sx={{
                            py: 4,
                            mb: 4,
                            textAlign: "center",
                            color: "#a9afc3",
                            transition: "transform 0.3s, filter 0.3s",
                        }}
                    >    <Typography variant="body2" sx={{ mb: 2 }}>
                            {product.title}
                        </Typography>
                        <Box
                            component="img"
                            src={product.images[0]}
                            alt={product.title}
                            className="product-image"
                            sx={{ width: "100%", maxWidth: 120, margin: "0 auto", height: 'auto' }}
                        />

                        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 0.5 }}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                ₹{product.finalPrice}
                            </Typography>
                            {product.originalPrice && (
                                <Typography
                                    variant="body2"
                                    sx={{ textDecoration: "line-through", color: "#888" }}
                                >
                                    ₹{product.originalPrice}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                ))}
            </Slider>
            <style>
                {`
                .product-slide {
                    filter: grayscale(0.7);
                    transform: scale(0.9); 
                    transition: transform 0.3s, filter 0.3s, margin 0.3s;
                }

                .slick-center .product-slide {
                    filter: grayscale(0);
                    transform: scale(1.3); /* zoom effect */ 
                }
                `}
            </style>
        </Box>

    );
}

export default FeaturedProduct;