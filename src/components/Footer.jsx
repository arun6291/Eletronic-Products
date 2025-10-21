// Footer.jsx
import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",  
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff", 
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={16}
          sx={{
            maxWidth: "1200px",
            padding: 4,
            mt: 6,
          }}
        >
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              MyCompany
            </Typography>
            <Typography variant="body2" sx={{ color: "#a9afc3" }}>
              We deliver exceptional digital solutions — web, mobile, and AI.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">Home</Link>
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">About</Link>
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">Services</Link>
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">Blog</Link>
            </Typography>
          </Grid>

          {/* Support */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">Help Center</Link>
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">Contact</Link>
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">Privacy</Link>
            </Typography>
            <Typography>
              <Link href="#" color="inherit" underline="none">Terms</Link>
            </Typography>
          </Grid>

          {/* Connect */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box>
              <IconButton color="inherit"><FacebookIcon /></IconButton>
              <IconButton color="inherit"><TwitterIcon /></IconButton>
              <IconButton color="inherit"><InstagramIcon /></IconButton>
              <IconButton color="inherit"><LinkedInIcon /></IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 1, color: "#a9afc3" }}>
              support@mycompany.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 4,
            textAlign: "center",
            pt: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#a9afc3", pb: 2 }}>
            © 2025 MyCompany. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>   
  );
}

export default Footer;
