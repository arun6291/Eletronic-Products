import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import productsData from '../../data/productsData';
import CustomButton from "../CustomButtons";


function HeroSlider() {
  const buttonText = "Shop Now";
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const sliderProducts = productsData.slice(0, 3);

  return (
    <Box sx={{
      mt: 4,
      px: 2,
      "& .slick-dots li button:before": {
        color: "#d00404",       // default dot color
        opacity: 1,
      },
      "& .slick-dots li.slick-active button:before": {
        color: "#a9afc3",          // active dot color
      },
    }}>
      <Slider {...settings}>
        {sliderProducts.map((product) => (
          <Card key={product.id} sx={{
            backgroundColor: "#000",
            color: 'gray',
            overflow: "hidden",
            p: 6
          }}>
            <Grid container spacing={4} alignItems="center">
              {/* Left side: text */}
              <Grid item xs={12} md={6} sx={{ p: 6 }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#a9afc3' }}>
                  {product.title}
                </Typography>
                <Typography variant="h4" sx={{ mb: 2, maxWidth: '300px', fontWeight: 'bold', color: '#a9afc3' }}>
                  {product.info}
                </Typography>
                {/* {product.info && (
                  <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    {product.info}
                  </Typography>
                )} */}
                <Typography variant="h6" sx={{ mb: 2, color: '#a9afc3' }}>
                  ₹{product.finalPrice}
                </Typography>

                {product.originalPrice && (
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#a9afc3",
                      textDecoration: "line-through",
                      fontWeight: 400,
                    }}
                  >
                    ₹{product.originalPrice}
                  </Typography>
                )}
                <CustomButton
                  label={buttonText} // was 'text' before 
                  variant={buttonText} // maps to color inside getColor()
                  sx={{ mt: 1, backgroundColor: "#d00404" }}
                >
                  View Product
                </CustomButton>
              </Grid>

              {/* Right side: image */}
              <Grid item xs={12} md={6} sx={{ minWidth: "50%", display: 'flex', justifyContent: 'flex-end' }}>
                <Box
                  component="img"
                  src={product.images[0]}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    height: "auto",
                    borderRadius: 0,
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default HeroSlider;