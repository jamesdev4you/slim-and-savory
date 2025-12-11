"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";

const videos = ["Chicken", "Beef", "Onions"];

const PressVideos = () => {
  return (
    <Box sx={{ width: "auto", minHeight: "100vh" }}>
      {videos.map((item, index) => (
        <Box
          key={index}
          sx={{
            height: "80vh",
            width: "100%",
            backgroundColor: "primary.main",
            borderColor: "secondary.main",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3em",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "40vw",
              height: "60%",
              backgroundImage: "url('/images/shared/food1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "5px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "secondary.light",
            }}
          />
          <Box
            sx={{
              width: "35vw",
              height: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Typography variant="h2" sx={{ color: "secondary.light" }}>
              Title of Video
            </Typography>
            <Typography variant="h3" sx={{ color: "secondary.light" }}>
              description
            </Typography>

            <Button
              variant="contained"
              sx={{
                width: { xl: "30%", md: "30%" },
                height: "40px",
                fontSize: { xl: "1em", md: "1em" },
                backgroundColor: "#373e02",
                borderRadius: "15px",
                color: "#d9d9d9", // Dark Green text
                border: "2px solid #d9d9d9", // Dark Green border
                fontWeight: "bold",
                "&:hover": {
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#D2691E", // Optional: subtle hover effect
                },
                marginTop: { xl: "1em", md: "1em" },
              }}
            >
              Link to Youtube Video
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PressVideos;
