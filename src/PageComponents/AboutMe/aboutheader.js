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
        minHeight: { xs: "auto", lg: "85vh", xl: "95vh" },
        maxHeight: { lg: "900px", xl: "1100px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        pb: { xs: "none", md: "none" },
        pt: { xs: "10vh", md: "6em" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "85%", lg: "80%" },
          height: "100%",
          maxHeight: { lg: "700px", xl: "850px" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },

          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "3em", md: "8em 3em" },
        }}
      >
        {/* LEFT IMAGE — author image */}
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "40%",
              md: "20vw",
              lg: "30vw",
            },
            aspectRatio: "3 / 4",
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
            width: { xs: "100%", sm: "55%", md: "60%", lg: "50%" },
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
            sx={{
              color: "primary.dark",
              fontWeight: "bold",
              display: { xs: "none", md: "none", lg: "inline" },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "primary.dark",
              fontWeight: "bold",
              display: { md: "inline", lg: "none" },
            }}
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
