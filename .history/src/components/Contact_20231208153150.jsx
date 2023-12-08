import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      
    </Layout>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      <div>
        <TextField
          required
          id="standard-required"
          label="Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-required-email"
          label="Email"
          variant="standard"
        />
      </div>
      <TextField id="standard-basic" label="Phone number" variant="standard" />
      <TextField
        id="standard-multiline-static"
        label="Message"
        multiline
        rows={4}
        variant="standard"
      />
      <Button variant="contained" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default Contact;
