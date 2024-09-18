import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Box className="footer-container">
          <Box className="footer-section">
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none">
              Home
            </Link>
            <Link href="/menu" color="inherit" underline="none">
              Menu
            </Link>
            <Link href="/about" color="inherit" underline="none">
              About Us
            </Link>
            <Link href="/contact" color="inherit" underline="none">
              Contact
            </Link>
          </Box>
          <Box className="footer-section">
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>1234 Food Street, Flavor Town</Typography>
            <Typography>Phone: +123 456 7890</Typography>
            <Typography>Email: info@restaurant.com</Typography>
          </Box>
        </Box>
        <Box textAlign="center" pt={{ xs: 3, sm: 5 }} pb={{ xs: 3, sm: 0 }}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Restaurant Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
