// Footer.js

import React from "react";
import { Box, Divider, IconButton } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import logoWords from "../icons/logoWords.png";

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
        <a href="/">
          <img
            src={logoWords}
            alt="Fledge coffee logo"
            style={{ width: 140, height: 140 }}
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