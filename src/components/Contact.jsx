import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "400px" }, // Make input fields wider
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& .MuiOutlinedInput-root": {
              // Apply border style
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiButton-root": { mt: 2, width: "150px" }, // Button styling
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="name-input"
            label="Name*"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            id="email-input"
            label="Email*"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="phone-input"
            label="Phone number"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="message-input"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" color="primary">
            SEND
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
