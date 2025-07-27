import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

const shopItems = ({ activeSection }) => {
  const shopData = {
    "All Products": [
      { picture: food1, href: "#" },
      { picture: food2, href: "#" },
      { picture: food3, href: "#" },
      { picture: food4, href: "#" },
    ],
    "Food Related": [
      { picture: food1, href: "#" },
      { picture: food2, href: "#" },
    ],
    Beauty: [
      { picture: food3, href: "#" },
      { picture: food4, href: "#" },
    ],
    Decorative: [],
    Wellness: [],
  };

  const items = shopData[activeSection] || [];

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
            key={index}
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: "23%",
              minWidth: "230px",
              borderRadius: "8px",
              backgroundImage: `url(${item.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xl: "40vh", md: "30vh", sm: "30vh", xs: "180px" },
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              "&:hover": { transform: "scale(1.02)" },
              transition: "transform 0.3s ease-in-out",
            }}
          />
        ))
      )}
    </Box>
  );
};
export default shopItems;
