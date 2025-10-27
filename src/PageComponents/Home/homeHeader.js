"use client";
import React from "react";
import { Box } from "@mui/material";
import { StyledAnimatedButton } from "../Styled/styledButtons.js";

const HomeHeader = () => {
  const headerMaterial = [
    { title: "Learn More", picture: "/images/shared/food1.jpg" },
    { title: "Learn More", picture: "/images/shared/food2.jpg" },
    { title: "Learn More", picture: "/images/shared/food3.jpg" },
    { title: "Learn More", picture: "/images/shared/food4.jpg" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: "64px",
      }}
    >
      <Box
        sx={{
          width: { xl: "80%", md: "90%", sm: "95%", xs: "95%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
          gap: 4,
        }}
      >
        {headerMaterial.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "20%",
              height: "70%",
              borderRadius: "8px",
              backgroundImage: `url(${item.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "visible",
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
