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
  border: "1px solid #D2691E",
  transition: "border-width 0.1s ease",

  "&:disabled": {
    cursor: "default",
  },

  "& svg": {
    display: "block",
    verticalAlign: "middle",
  },

  "&[hidden]": {
    display: "none",
    color: "#f1f1f1",
  },

  "&:hover": {
    borderWidth: "3px",
    color: "#f1f1f1",
  },
}));

export const DarkButtonBlog = styled(Button)(({ theme }) => ({
  color: "#d9d9d9",
  border: "2px solid #d9d9d9",
  fontWeight: "bold",
  backgroundColor: "#373e02",
  width: "50%",
  "&:hover": {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#D2691E",
  },
}));

export const ShopButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  color: "#d9d9d9",
  border: active ? "2px solid #D2691E" : "2px solid #d9d9d9",
  fontWeight: "bold",
  backgroundColor: "#373e02",
  width: "18%",
  borderRadius: "15px",
  "&:hover": {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#D2691E",
  },
}));
