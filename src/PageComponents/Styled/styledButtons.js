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
  width: "80%",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: 1.5,
  textTransform: "uppercase",
  padding: "20px 45px",
  borderRadius: "0px",
  border: "1px solid #a0c49d",
  transition: "all .2s ease",

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
    borderWidth: "1px",
    borderColor: "#373e02",
    color: "#373e02",
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
    borderColor: "#a0c49d",
  },
}));

export const ShopButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  color: "#d9d9d9",
  border: active ? "2px solid #D2691E" : "2px solid #d9d9d9",
  fontWeight: "bold",
  backgroundColor: "#373e02",
  width: "19%",
  borderRadius: "15px",
  "&:hover": {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#a0c49d",
  },
}));
