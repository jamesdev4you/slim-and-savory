"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";

const ContactHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        paddingTop: "12vh",
        backgroundImage: "url('/images/shared/food2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "secondary.main", fontWeight: "bold" }}
      >
        Reach Out For A Quick Response!
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "secondary.main", fontWeight: "bold" }}
      >
        Volunteering - Teaching - Zoom Calls - Press - Social Media
      </Typography>
    </Box>
  );
};
export default ContactHeader;
