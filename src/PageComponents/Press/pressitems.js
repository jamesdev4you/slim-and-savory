import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

const pressItems = ({ activeSection }) => {
  const pressData = {
    "All Products": [
      { picture: food1, href: "#", text: "Press Article - We did it big" },
      { picture: food2, href: "#", text: "Press Article - We did it big" },
      { picture: food3, href: "#", text: "Press Article - We did it big" },
      { picture: food4, href: "#", text: "Press Article - We did it big" },
    ],
    "Food Related": [
      { picture: food1, href: "#", text: "Press Article - We did it big" },
      { picture: food2, href: "#", text: "Press Article - We did it big" },
    ],
    Beauty: [
      { picture: food3, href: "#", text: "Press Article - We did it big" },
      { picture: food4, href: "#", text: "Press Article - We did it big" },
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
                backgroundImage: `url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
export default pressItems;
