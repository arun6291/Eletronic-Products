import React from 'react';
import Button from '@mui/material/Button';


const CustomButton = ({label, onClick, variant = 'default'}) => {
    const getColor = () => {
        switch(variant) {
            case 'Shop Now':
                return 'Primary';
            case 'Add To Cart':
                return 'secondary';
            case 'Subscribe':
                return 'success';
            case 'Checkout':
                return 'error';
            default:
                return 'info';
        }
    };

    return(
        <Button
            variant='contained'
            color= {getColor()}
            onClick={onclick}
            sx = {{borderRadius: 2, padding: '8px 20px', fontWeight: 600}}
        >
            {label}
        </Button>
    )
}

export default CustomButton;
