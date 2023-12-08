import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import Layout from "./Layout";
import CoffeeCard from "./CoffeeCard";

// create a theme with "Red Hat Display" font
const theme = createTheme({
  typography: {
    fontFamily: "Red Hat Display, sans-serif",
  },
});

const RoastedCoffee = () => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Box bgcolor="background.primary" mt={10} mx={40} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Roasted Coffee
          </Typography>
          <Typography variant="h6">
            Discover the rich and flavorful world of roasted coffee. Our beans
            are sourced from around the world and roasted to perfection to bring
            you the finest cups of coffee.
          </Typography>
          <Box mt={4}>
            <Grid container spacing={2}>
              {[...Array(8)].map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <CoffeeCard />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};

export default RoastedCoffee;
