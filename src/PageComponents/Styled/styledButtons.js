import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledAnimatedButton = styled(Button)(({ theme }) => ({
  WebkitTapHighlightColor: "transparent",
  WebkitAppearance: "button",
  backgroundColor: "#7c8e76",
  backgroundImage: "none",
  color: "#ffffff",
  cursor: "pointer",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  fontSize: "100%",
  fontWeight: 900,
  lineHeight: 1.5,
  textTransform: "uppercase",
  padding: "20px 45px",
  border: "1px solid #f7ffe5",
  transition: "border-width 0.2s ease",

  "&:disabled": {
    cursor: "default",
  },

  "& svg": {
    display: "block",
    verticalAlign: "middle",
  },

  "&[hidden]": {
    display: "none",
    color: "#f7ffe5",
  },

  "&:hover": {
    borderWidth: "6px", // thick border on hover
    color: "#f7ffe5",
  },
}));
