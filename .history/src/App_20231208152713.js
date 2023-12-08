import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import RoastedCoffee from "./components/RoastedCoffee";
import GreenBeans from "./components/Merchandise";
import Contact from "./components/Contact";

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
