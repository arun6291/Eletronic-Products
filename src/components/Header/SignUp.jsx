import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import CustomButton from "../CustomButtons";
import { headerStyles } from "./HeaderStyles";

function SignUp({ onClose }) {
    const buttonText = "SignUp";
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h5" sx={headerStyles.Box.title}>Signup</Typography>
            <Typography variant="h6" sx={headerStyles.Box.subtitle}>Already have an account? Login</Typography>
            <TextField label="Username" variant="outlined" sx={headerStyles.textField} fullWidth />
            <TextField label="Email" variant="outlined" sx={headerStyles.textField} fullWidth />
            <TextField label="Password" variant="outlined" sx={headerStyles.textField} type="password" fullWidth />
            <TextField label="Confirm Password" variant="outlined" sx={headerStyles.textField} type="confirmpassword" fullWidth />
            {/* ✅ Using the reusable button */}
            <CustomButton
                label={buttonText} // was 'text' before
                onClick={onClose}
                variant={buttonText} // maps to color inside getColor()
                sx={{ mt: 1, backgroundColor: "#d00404" }}
            />
        </Box>
    );
}

export default SignUp;