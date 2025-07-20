import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./PageComponents/Home/home.js";
import NavBar from "./PageComponents/NavBar/navbar.js";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7c8e76",
      light: "#a0c49d",
      dark: "#373e02",
    },
    secondary: {
      main: "#f7ffe5",
    },
    background: {
      default: "#d9d9d9",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<NavBar />} color="secondary">
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
