import * as React from 'react';
import { useState } from 'react';
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
import SignupForm from "./SignUp";

function Header() {
    // Modal open/close state
    const [open, setOpen] = useState(false);

    // open modal
    const handleOpen = () => setOpen(true);
    // close modal
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={headerStyles.appBar}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={headerStyles.title}>
                        Tech-Shop
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton size="large" aria-label="cart" color="inherit">
                        <Badge badgeContent={3} color="error">
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