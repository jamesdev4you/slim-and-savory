"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PressHeader = ({ videoheader }: { videoheader?: any }) => {
  const videoUrl = videoheader?.video?.asset?.url;

  const handleScroll = () => {
    const target = document.getElementById("press-videos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Background Video (only if exists) */}
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      ) : (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/shared/food1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      )}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          position: "relative",
          zIndex: 2,
        }}
      >
        {videoheader?.subtitle ??
          "Check out some of my step-by-step cooking videos!"}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          color: "white",
          fontWeight: "bold",
          position: "relative",
          zIndex: 2,
          width: "80%",
          textAlign: "center",
        }}
      >
        {videoheader?.title ??
          "Check out some of my step-by-step cooking videos!"}
      </Typography>
      <Typography
        variant="p"
        sx={{
          display: { xs: "flex-inline", md: "none" },

          color: "white",
          fontWeight: "bold",
          position: "relative",
          zIndex: 2,
          width: "80%",
          textAlign: "center",
        }}
      >
        {videoheader?.title ??
          "Check out some of my step-by-step cooking videos!"}
      </Typography>
      <Box
        onClick={handleScroll}
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 3,
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.05)",
          },
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            color: "white",
            fontSize: { xs: "2.5rem", md: "3rem" },
            animation: "bounce 2s infinite",
          }}
        />
      </Box>
    </Box>
  );
};

export default PressHeader;
