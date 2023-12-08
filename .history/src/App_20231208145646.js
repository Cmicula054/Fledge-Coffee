import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import RoastedCoffee from "./components/RoastedCoffee";
import GreenBeans from "./components/Merchandise";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Dancing Script, cursive",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/roasted-coffee" element={<RoastedCoffee />} />
          <Route path="/green-beans" element={<GreenBeans />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
