"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import ContactForm from "./contactForm";
import Image from "next/image";

const HomeContact = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundColor: "primary.main",
        paddingTop: "50px",
        padding: "2em",
      }}
    >
      <Box
        sx={{
          width: "40%",
          height: "70%",
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "170px", // or a fixed height like "300px"
            position: "relative",
          }}
        >
          <Image
            src="/images/shared/LabelLogo.png"
            alt="Label logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{ marginTop: ".5em", color: "secondary.main" }}
        >
          Let's talk
        </Typography>
        <Typography variant="h3" sx={{ color: "secondary.main" }}>
          Slim and Savory.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          gap: "1em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "40%",
              lg: "100%",
              md: "100%",
              sm: "90%",
              xs: "100%",
            },
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: {
              xl: "0px",
              lg: "0px",
              md: "50px",
              sm: "50px",
              xs: "50px",
            },
            marginTop: {
              xl: "0px",
              lg: "0px",
              md: "50px",
              sm: "50px",
              xs: "50px",
            },
          }}
        >
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContact;
