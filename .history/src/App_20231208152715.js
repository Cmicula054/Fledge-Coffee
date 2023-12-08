import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import RoastedCoffee from "./components/RoastedCoffee";
import GreenBeans from "./components/Merchandise";
import Contact from "./components/Contact";

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4a4a4a", // a professional dark gray
      },
      secondary: {
        main: "#c5a567", // a soft coffee brown for accents
      },
      background: {
        default: "#f7f7f7", // a light gray background for a clean look
        paper: "#ffffff", // white background for elements like cards
      },
      text: {
        primary: "#333333", // very dark gray for high contrast text
        secondary: "#555555", // medium gray for less important text
      },
    },
    typography: {
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      h1: {
        fontSize: "2.2rem",
        fontWeight: 500,
      },
      body1: {
        fontSize: "1rem",
      },
    },
    // Other theme settings...
  });
  
function App() {
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
