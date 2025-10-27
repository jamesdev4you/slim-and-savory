"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "Birds, system-ui, -apple-system, Segoe UI, Roboto",
  },
  palette: {
    mode: "light",
    primary: { main: "#7c8e76", light: "#a0c49d", dark: "#373e02" },
    secondary: { main: "#f7ffe5" },
    background: { default: "#f1f1f1", dark: "#F5F5F5", line: "#d9d9d9" },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
