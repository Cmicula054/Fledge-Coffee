// Footer.js

import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";

const Footer = () => {
  return (
    <Box mt={5} p={3} bgcolor="background.paper">
      <Divider />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        pt={2}
      >
        <StoreIcon style={{ fontSize: 60 }} />
        <Typography variant="h6" align="center">
          Our Coffee Shop
        </Typography>
        <IconButton
          color="black"
          component="a"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
