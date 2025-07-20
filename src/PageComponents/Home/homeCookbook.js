import React from "react";
import { Typography, Box, Button } from "@mui/material";
import food1 from "../assets/food1.jpg";

const HomeCookbook = () => {
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
          width: "80%",
          height: "80%",
          backgroundColor: "background.dark",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0em 3em",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "90%",
            backgroundImage: `url(${food1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            width: "70%",
            padding: "3em 0em",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            marginTop: "3%",
          }}
        >
          <Typography variant="h5">Coming Soon!</Typography>
          <Typography variant="h3">Slim & Savory Cookbook</Typography>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Join Suzie Aragon's Newsletter and be the first to
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            know when her innovative cookbook arrives!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "2em",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xl: "30%", md: "30%" },
                height: "40px",
                fontSize: { xl: "1em", md: "1em" },
                borderRadius: "0px",
                backgroundColor: "#FFFFFF",
                color: "#004225", // Dark Green text
                border: "2px solid #004225", // Dark Green border
                "&:hover": {
                  backgroundColor: "#F0F0F0", // Optional: subtle hover effect
                },
              }}
            >
              Learn More
            </Button>
            <Button
              variant="contained"
              sx={{
                width: { xl: "30%", md: "30%" },
                height: "40px",
                fontSize: { xl: "1em", md: "1em" },
                borderRadius: "0px",
                backgroundColor: "#FFFFFF",
                color: "#004225", // Dark Green text
                border: "2px solid #004225", // Dark Green border
                "&:hover": {
                  backgroundColor: "#F0F0F0", // Optional: subtle hover effect
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCookbook;
