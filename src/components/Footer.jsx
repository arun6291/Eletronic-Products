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

        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            textAlign: "center", 
          }}
        >
          <Box
            component="footer"
            sx={{
              backgroundColor: "#0d0d0d",
              color: "#a9afc3",
              py: 2,
              px: { xs: 2, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #333",
            }}
          >
            {/* Left side — Copyright */}
            <Typography
              variant="body2"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 1, sm: 0 },
              }}
            >
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>

            {/* Right side — Social icons */}
            <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
              <IconButton
                aria-label="Facebook"
                sx={{ color: "#a9afc3", "&:hover": { color: "#1877f2" } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{ color: "#a9afc3", "&:hover": { color: "#e1306c" } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{ color: "#a9afc3", "&:hover": { color: "#1da1f2" } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{ color: "#a9afc3", "&:hover": { color: "#0a66c2" } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
