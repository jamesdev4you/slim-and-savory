"use client";
import React from "react";
import { Typography, Box } from "@mui/material";

const ContactHeader = ({ data }) => {
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
        backgroundImage: `url(${data?.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "secondary.main", fontWeight: "bold" }}
      >
        {data?.title}
      </Typography>

      <Typography
        variant="h6"
        sx={{ color: "secondary.main", fontWeight: "bold" }}
      >
        {data?.subtitle}
      </Typography>
    </Box>
  );
};

export default ContactHeader;
