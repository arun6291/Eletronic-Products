import * as React from 'react';
import { useState, useContext } from 'react';
import { headerStyles } from "./HeaderStyles";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Modal,
} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/CartContext';
import SignupForm from "./SignUp";
import { Link } from "react-router-dom"; // Import Link

function Header() {

    // Modal open/close state
    const [open, setOpen] = useState(false);

    // open modal
    const handleOpen = () => setOpen(true);
    // close modal
    const handleClose = () => setOpen(false);

    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={headerStyles.appBar}>
                <Toolbar>
                    {/* Logo aligned left */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <Typography variant="h6" component="div" sx={headerStyles.title}>
                                Tech-Shop
                            </Typography>
                        </Link>
                    </Box>

                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    {/* ✅ Dynamic cart badge */}
                    <IconButton size="large" aria-label="cart" color="inherit">
                        <Badge badgeContent={itemCount} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" color="inherit" onClick={handleOpen}>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* SIGNUP MODAL */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="signup-modal-title"
                aria-describedby="signup-modal-description"
            >
                <Box sx={headerStyles.modalBox}>
                    {/* Close Button */}
                    <IconButton onClick={handleClose} sx={headerStyles.closeButton}>
                        <CloseIcon />
                    </IconButton>
                    {/* Signup Form */}
                    <SignupForm onClose={handleClose} />
                </Box>
            </Modal>
        </Box>
    );
}


export default Header;