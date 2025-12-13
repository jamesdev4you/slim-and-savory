"use client";
import React from "react";
import { Typography, Box } from "@mui/material";

const PressHeader = ({ videoHero }: { videoHero?: any }) => {
  const videoUrl = videoHero?.video?.asset?.url;

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

      {/* 🖤 Overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      {/* 📝 Text (unchanged visually) */}
      <Typography
        variant="h4"
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
          position: "relative",
          zIndex: 2,
        }}
      >
        {videoHero?.title ??
          "Check out some of my step-by-step cooking videos!"}
      </Typography>
    </Box>
  );
};

export default PressHeader;
