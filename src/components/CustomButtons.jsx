import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const CustomButton = ({ label, onClick, variant = 'default' }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (label === "Shop Now" && product?.id) {
            navigate(`/product/${product.id}`); // 🔗 navigate to details page
        } else {
            onClick?.(); // 🛒 trigger custom click (e.g. addToCart)
        }
    };
    const getColor = () => {
        switch (variant) {
            case 'Shop Now':
                return 'Primary';
            case 'Add To Cart':
                return 'secondary';
            case 'Subscribe':
                return 'success';
            case 'Checkout':
                return 'error';
            case 'Sign Up':   // add your Signup case
                return 'primary';
            default:
                return 'info';
        }
    };

    return (
        <Button
            variant='contained'
            color={getColor()}
            onClick={onClick}
            sx={{
                backgroundColor: "#d00404",
                borderRadius: 1,
                padding: '8px 20px',
                color: '#fff',
                textTransform: "none",
                "&:hover": {
                    backgroundColor: "#a00303",
                },
            }}
        >
            {label}
        </Button>
    )
}

export default CustomButton;
