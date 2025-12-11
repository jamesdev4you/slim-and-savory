"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";

const PressHeader = () => {
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
        backgroundImage: "url('/images/shared/food1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "secondary.main", fontWeight: "bold" }}
      >
        Check out some of my step-by-step cooking videos!
      </Typography>
    </Box>
  );
};
export default PressHeader;
