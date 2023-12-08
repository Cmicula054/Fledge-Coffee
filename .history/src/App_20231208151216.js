import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import RoastedCoffee from "./components/RoastedCoffee";
import GreenBeans from "./components/Merchandise";
import Contact from "./components/Contact";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5e503f", // a coffee-inspired color
      },
      secondary: {
        main: "#b9925e", // a complementary color
      },
      background: {
        default: "#fffaf5", // a light, warm color for the background
      },
      text: {
        primary: "#3e2723", // dark color for text for readability
        secondary: "#5e503f", // slightly lighter color for secondary text
      },
    },
    typography: {
      fontFamily: "Red Hat Display, sans-serif",
    },
    // other theme customizations
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<RoastedCoffee />} />
          <Route path="/roasted-coffee" element={<RoastedCoffee />} />
          <Route path="/green-beans" element={<GreenBeans />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
