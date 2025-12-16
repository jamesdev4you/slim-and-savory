"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import { urlFor } from "@/sanity/image";

const AboutDescription = ({ data }) => {
  if (!data) return null;

  const { image, paragraphOne, paragraphTwo, paragraphThree } = data;

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0em 3em",
        }}
      >
        {/* LEFT TEXT COLUMN — unchanged */}
        <Box
          sx={{
            width: "60%",
            padding: "3em 0em",
            height: { xl: "90%", md: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <Typography
            variant="p"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            {paragraphOne}
          </Typography>

          <Typography
            variant="p"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            {paragraphTwo}
          </Typography>

          <Typography
            variant="p"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            {paragraphThree}
          </Typography>
        </Box>

        {/* RIGHT IMAGE — still a background image */}
        <Box
          sx={{
            width: "30vw",
            height: { md: "70%", lg: "70%", xl: "70%" },
            backgroundImage: image
              ? `url(${urlFor(image).width(1200).url()})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutDescription;
