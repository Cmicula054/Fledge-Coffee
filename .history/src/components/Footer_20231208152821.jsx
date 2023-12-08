// Footer.js

import React from "react";
import { Box, Divider, IconButton } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import Fledge1 from ""

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
        <a href="/">
          <img
            src={Fledge1}
            alt="Fledge coffee logo"
            style={{ width: 390, height: 490 }}
          />
        </a>
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
