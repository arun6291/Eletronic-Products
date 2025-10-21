import * as React from 'react';
import { styled } from '@mui/material/styles';
import StarIcon from "@mui/icons-material/Star"; // You can replace this icon
import { Box, Paper, Typography, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    background: '#161819',
    justifyContent: "center",
    width: "100%",
    gap: theme.spacing(1.5),
    borderRadius: 12,
    transition: "all 0.3s ease",
    "&:hover": {
        boxShadow: theme.shadows[4],
        transform: "translateY(-4px)",
    },
}));

function Advantages() {
    const advantages = [
        { id: 1, icon: <StarIcon color="primary" />, text: "High Quality" },
        { id: 2, icon: <StarIcon color="secondary" />, text: "Fast Delivery" },
        { id: 3, icon: <StarIcon color="success" />, text: "24/7 Support" },
        { id: 4, icon: <StarIcon color="warning" />, text: "Affordable Prices" },
    ];

    return (
        <Box sx={{ flexGrow: 1, py: 8, pb: 12, bgcolor: '#161819', px: { xs: 2, md: 6 } }}>
            <Typography
                variant="h2"
                sx={{
                    color: "#a9afc3",
                    py: 2,
                    mb: 10, 
                    textAlign: "center",
                    fontSize: '2rem', // ~40px
                    fontWeight: 600,
                }}
            >
                Our Advantages
            </Typography> 
            <Grid
                container
                spacing={24}
                sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    background: '161819',
                    px: { xs: 2, md: 0 },
                }}
            >
                {advantages.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
                        <Item>
                            {item.icon}
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 600, color: "#a9afc3" }}
                            >
                                {item.text}
                            </Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Advantages;