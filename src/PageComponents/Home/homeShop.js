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
        height: "70vh",
      }}
    >
      <Box
        sx={{
          height: "90%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
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
                height: "80%", // Fixed height for uniformity
                borderRadius: "8px", // Box-like appearance
                overflow: "hidden", // Ensures images stay within bounds
                boxShadow: 3, // Adds depth
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensures images fill container
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
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomeShop;
