import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function SignUp({ onClose }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6">Create Account</Typography>
      <TextField label="Full Name" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Password" type="password" fullWidth />
      <Button variant="contained" onClick={onClose}>
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUp;