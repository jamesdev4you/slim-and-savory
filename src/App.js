import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./PageComponents/Home/home.js";
import NavBar from "./PageComponents/NavBar/navbar.js";
import Birds from "./Fonts/birds.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "Birds",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Birds';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Birds'), local('Lora-Regular'), url(${Birds}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
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
      default: "#f1f1f1",
      dark: "#F5F5F5",
      line: "#d9d9d9",
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
