import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ShopItems = ({ activeSection }) => {
  const shopData = {
    "All Products": [
      { picture: "/images/shared/food1.jpg", href: "#" },
      { picture: "/images/shared/food2.jpg", href: "#" },
      { picture: "/images/shared/food3.jpg", href: "#" },
      { picture: "/images/shared/food4.jpg", href: "#" },
    ],
    "Food Related": [
      { picture: "/images/shared/food1.jpg", href: "#" },
      { picture: "/images/shared/food2.jpg", href: "#" },
    ],
    Beauty: [
      { picture: "/images/shared/food3.jpg", href: "#" },
      { picture: "/images/shared/food3.jpg", href: "#" },
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
export default ShopItems;
