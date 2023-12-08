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
          "& .MuiTextField-root": { m: 1, width: "300px" },
          "& .MuiButton-root": { mt: 2, width: "150px" },
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
            "& .MuiInput-underline:before": { borderBottomColor: "black" }, // default underline color
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "black",
            }, // hover underline color
            "& .MuiInput-underline:after": { borderBottomColor: "black" }, // focused underline color
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="name-input"
            label="Name"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            id="email-input"
            label="Email"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="phone-input"
            label="Phone number"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="message-input"
            label="Message"
            multiline
            rows={4}
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
