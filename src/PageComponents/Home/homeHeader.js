import React from "react";
import { Box } from "@mui/material";
import { StyledAnimatedButton } from "../Styled/styledButtons.js";
//"url('/images/shared/food2.jpg')",
const HomeHeader = () => {
  const headerMaterial = [
    {
      title: "Learn More",
      picture: "/images/shared/food1.jpg",
      button: <StyledAnimatedButton>Learn more</StyledAnimatedButton>,
    },
    {
      title: "Learn More",
      picture: "/images/shared/food2.jpg",
      button: <StyledAnimatedButton>Learn more</StyledAnimatedButton>,
    },
    {
      title: "Learn More",
      picture: "/images/shared/food3.jpg",
      button: <StyledAnimatedButton>Learn more</StyledAnimatedButton>,
    },
    {
      title: "Learn More",
      picture: "/images/shared/food4.jpg",
      button: <StyledAnimatedButton>Learn more</StyledAnimatedButton>,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "64px", // push down below NavBar (if NavBar is fixed)
      }}
    >
      <Box
        sx={{
          width: { xl: "80%", md: "90%" },
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 4,
        }}
      >
        {headerMaterial.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "80%",
              backgroundImage: `url(${item.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.button}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeHeader;
