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
        minHeight: { md: "80vh", lg: "100vh" },
        height: "auto",
        display: "flex",
        flexDirection: { md: "column", lg: "row" },
        alignItems: { md: "center", lg: "flex-start" },
        justifyContent: "center",
        gap: "2em",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundColor: "primary.main",
        padding: { md: "2em", lg: "4em" },
      }}
    >
      <Box
        sx={{
          width: { md: "90%", lg: "40%", xl: "40%" },
          height: "70%",
          display: "flex",
          alignItems: { md: "center", lg: "flex-start" },
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { md: "70%", lg: "70%", xl: "100%" },
            height: { md: "100px", lg: "100px", xl: "170px" },
            position: "relative",
            display: { md: "none", lg: "flex" },
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
        <Typography
          variant="h3"
          sx={{ color: "secondary.main", display: { md: "none", lg: "flex" } }}
        >
          Slim and Savory.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { md: "70%", lg: "70%", xl: "100%" },
          height: { md: "150px", lg: "100px", xl: "170px" },
          position: "relative",
          display: { md: "flex", lg: "none" },
        }}
      >
        <Image
          src="/images/shared/LabelLogo.png"
          alt="Label logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Box
        sx={{
          width: { md: "80%", lg: "50%", xl: "40%" },
          gap: "1em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "100%",
              lg: "100%",
              md: "100%",
              sm: "90%",
              xs: "100%",
            },

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
              md: "0px",
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
