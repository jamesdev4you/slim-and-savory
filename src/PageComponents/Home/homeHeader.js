import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { StyledAnimatedButton } from "../Styled/styledButtons";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

const HomeHeader = () => {
  const headerMaterial = [
    {
      title: "Learn More",
      picture: food1,
      button: (
        <AnimatedHeaderStyledButton>Learn more</AnimatedHeaderStyledButton>
      ),
    },
    {
      title: "Learn More",
      picture: food2,
      button: (
        <Button
          variant="contained"
          sx={{
            width: { xl: "60%", md: "80%" },
            height: "60px",
            fontSize: "1rem",
            borderRadius: "0px",
          }}
        >
          Learn More
        </Button>
      ),
    },
    {
      title: "Learn More",
      picture: food3,
      button: (
        <Button
          variant="contained"
          sx={{
            width: { xl: "60%", md: "80%" },
            height: "60px",
            fontSize: "1rem",
            borderRadius: "0px",
          }}
        >
          Learn More
        </Button>
      ),
    },
    {
      title: "Learn More",
      picture: food4,
      button: (
        <Button
          variant="contained"
          sx={{
            width: { xl: "60%", md: "80%" },
            height: "60px",
            fontSize: "1rem",
            borderRadius: "0px",
          }}
        >
          Learn More
        </Button>
      ),
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
