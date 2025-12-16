"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import { urlFor } from "@/sanity/image";

const AboutHeader = ({ data }) => {
  if (!data) return null;

  const { title, description, author } = data;

  const authorImage = author?.headshot;

  return (
    <Box
      sx={{
        width: "100%",
        height: { lg: "110vh", xl: "90vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "12vh",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0em 3em",
        }}
      >
        {/* LEFT IMAGE — author image */}
        <Box
          sx={{
            width: "30vw",
            height: "70%",
            backgroundImage: authorImage
              ? `url(${urlFor(authorImage).width(1200).url()})`
              : "none",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* RIGHT TEXT — unchanged layout */}
        <Box
          sx={{
            width: "50%",
            padding: "3em 0em",
            height: { xl: "90%", md: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "primary.dark", fontWeight: "bold" }}
          >
            {title}
          </Typography>

          {/* LOGO — unchanged */}
          <Box
            sx={{
              width: { lg: "60%", xl: "75%" },
              height: { lg: "100px", xl: "170px" },
              backgroundImage: "url('/images/shared/LabelLogo.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutHeader;
