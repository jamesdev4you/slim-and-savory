import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PressItems = ({ activeSection }) => {
  const pressData = {
    "All Products": [
      {
        picture: "/images/shared/food1.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
      {
        picture: "/images/shared/food2.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
      {
        picture: "/images/shared/food3.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
      {
        picture: "/images/shared/food4.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
    ],
    "Food Related": [
      {
        picture: "/images/shared/food1.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
      {
        picture: "/images/shared/food2.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
    ],
    Beauty: [
      {
        picture: "/images/shared/food3.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
      {
        picture: "/images/shared/food4.jpg",
        href: "#",
        text: "Press Article - We did it big",
      },
    ],
    Decorative: [],
    Wellness: [],
  };

  const items = pressData[activeSection] || [];

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        padding: "4em",
        backgroundColor: "secondary.main",
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        justifyContent: "center",
      }}
    >
      {items.length === 0 ? (
        <Box>
          <Typography variant="h3" sx={{ color: "primary.dark" }}>
            No items available for {activeSection} ... :(
          </Typography>
        </Box>
      ) : (
        items.map((item, index) => (
          <Box
            sx={{
              height: { xl: "80vh", md: "40vh", sm: "30vh", xs: "180px" },
              minWidth: "230px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                textDecoration: "underline",
                textDecorationColor: "primary.dark",
                transition: "text-decoration-color .3 ease-in-out",
              },
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <Box
              key={index}
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "23%",
                minWidth: "230px",
                borderRadius: "8px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${item.picture})`,
                height: { xl: "40vh", md: "30vh", sm: "30vh", xs: "180px" },
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                "&:hover": { transform: "scale(1.02)" },
                transition: "transform 0.3s ease-in-out",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                width: "80%",
                color: "primary.dark",
                textAlign: "center",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
};
export default PressItems;
