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
        minHeight: { md: "auto", lg: "85vh" },
        maxHeight: { lg: "900px", xl: "1100px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        paddingY: { md: "6em", lg: 0 },
      }}
    >
      <Box
        sx={{
          width: "95%",
          height: "100%",
          maxHeight: { lg: "700px", xl: "850px" },
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "3em", md: "0 3em" },
        }}
      >
        {/* LEFT TEXT COLUMN — unchanged */}
        <Box
          sx={{
            width: { xs: "97%", md: "60%" },
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
            width: { xs: "95%", md: "35%", lg: "30vw" },
            maxWidth: "420px",
            aspectRatio: "3 / 4",
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
