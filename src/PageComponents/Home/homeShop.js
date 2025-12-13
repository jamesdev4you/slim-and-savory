"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};
const ArrowLeft = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous slide"
    style={{
      position: "absolute",
      left: "0px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#373e02",
      color: "#fff",
      borderRadius: "50%",
      border: "none",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 10,
    }}
  >
    ‹
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next slide"
    style={{
      position: "absolute",
      right: "0px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#373e02",
      color: "#fff",
      borderRadius: "50%",
      border: "none",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 10,
    }}
  >
    ›
  </button>
);

const HomeShop = () => {
  const images = [
    { src: "/images/shared/food1.jpg", alt: "Grilled chicken salad" },
    { src: "/images/shared/food2.jpg", alt: "Avocado toast with eggs" },
    { src: "/images/shared/food3.jpg", alt: "Berry yogurt bowl" },
    { src: "/images/shared/food4.jpg", alt: "Veggie quinoa plate" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        backgroundColor: "secondary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <Typography variant="h2" sx={{ color: "primary.dark" }}>
          Come Shop With Me
        </Typography>

        {/* ✅ FIXED CAROUSEL */}
        <Box
          sx={{
            width: "100%",
            position: "relative", // ✅ anchor for arrows
            overflow: "visible", // ✅ allow arrows outside
          }}
        >
          <Carousel
            responsive={responsive}
            infinite
            draggable
            customLeftArrow={<ArrowLeft />}
            customRightArrow={<ArrowRight />}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center", // ✅ centers the card
                }}
              >
                <Box
                  sx={{
                    width: "70%", // ✅ controls card size
                    maxWidth: "200px", // ✅ prevents giant cards
                    borderRadius: "12px",
                    overflow: "hidden",

                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "220px", // ✅ controls image height
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 1.5,
                      fontSize: "24px",

                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    yo
                  </Typography>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>

        <Button
          variant="contained"
          sx={{
            width: "30%",
            height: "60px",
            backgroundColor: "#373e02",
            color: "#d9d9d9",
            border: "2px solid #d9d9d9",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "#D2691E",
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomeShop;
