import React from "react";
import { Typography, Box, Button } from "@mui/material";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

const HomeShop = () => {
  const images = [food1, food2, food3, food4];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "90vh",
        backgroundColor: "secondary.main",
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
        <Typography variant="h2" sx={{ color: "primary.dark" }}>
          {" "}
          Come Shop With Me
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
                "&:hover": { cursor: "pointer" },
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src={image} alt={`Food ${index + 1}`} />
            </Box>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            width: { xl: "30%", md: "30%" },
            height: "60px",
            fontSize: { xl: "1em", md: "1em" },
            borderRadius: "0px",
            backgroundColor: "#373e02",
            color: "#d9d9d9", // Dark Green text
            border: "2px solid #d9d9d9", // Dark Green border
            fontWeight: "bold",
            "&:hover": {
              color: "primary.light",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "primary.light", // Optional: subtle hover effect
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
