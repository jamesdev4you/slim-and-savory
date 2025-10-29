"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";

const AboutMeShop = () => {
  const images = [
    { src: "/images/shared/food1.jpg", alt: "Grilled chicken salad" },
    { src: "/images/shared/food2.jpg", alt: "Avocado toast with eggs" },
    { src: "/images/shared/food3.jpg", alt: "Berry yogurt bowl" },
    { src: "/images/shared/food4.jpg", alt: "Veggie quinoa plate" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "90vh",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          height: "90%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "2em",
        }}
      >
        <Typography variant="h2" sx={{ color: "secondary.main" }}>
          Some Of My Favorites
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "2%", // Adds small space between images
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "22%",
                height: "auto",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: 3,
                "&:hover": { cursor: "pointer", border: "1px solid #D2691E" },
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  "&:hover": { transform: "scale(1.02)" },
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                style={{ objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            width: { xl: "30%", md: "30%" },
            height: "60px",
            fontSize: { xl: "1em", md: "1em" },
            borderRadius: "50px",
            backgroundColor: "secondary.main",
            color: "primary.main", // Dark Green text
            fontWeight: "bold",
            transition: "all ease-in-out .2s",
            "&:hover": {
              color: "primary.dark",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#D2691E", // Optional: subtle hover effect
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};
export default AboutMeShop;
