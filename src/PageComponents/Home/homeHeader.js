"use client";
import React from "react";
import { Box } from "@mui/material";
import { StyledAnimatedButton } from "../Styled/styledButtons.js";

const HomeHeader = () => {
  const headerMaterial = [
    { Title: "Learn More", Picture: "/images/shared/food1.jpg" },
    { Title: "Learn More", Picture: "/images/shared/food2.jpg" },
    { Title: "Learn More", Picture: "/images/shared/food3.jpg" },
    { Title: "Learn More", Picture: "/images/shared/food4.jpg" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        pt: "64px", // space below NavBar if fixed
      }}
    >
      <Box
        sx={{
          width: { xl: "80%", md: "90%", sm: "95%", xs: "95%" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
        }}
      >
        {headerMaterial.map((item) => (
          <Box
            height={250}
            width={300}
            sx={{
              borderRadius: "8px",
              backgroundImage: `url(${item.Picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: -30,
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledAnimatedButton>Learn more</StyledAnimatedButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeHeader;
