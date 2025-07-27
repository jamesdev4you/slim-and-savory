import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ShopButton } from "../Styled/styledButtons";

const shopHeader = () => {
  const shopSections = [
    "All Products",
    "Food Related",
    "Beauty",
    "Decorative",
    "Wellness",
  ];

  const [activeSection, setActiveSection] = useState(shopSections[0]);

  const getContent = (section) => {
    switch (section) {
      case "All Products":
        return <Box p={2}>Welcome to the Home section!</Box>;
      case "Food Related":
        return <Box p={2}>Learn more About us.</Box>;
      case "Beauty":
        return <Box p={2}>Here are our Services.</Box>;
      case "Decorative":
        return <Box p={2}>Contact us for more information.</Box>;
      case "Wellness":
        return <Box p={2}>Frequently Asked Questions.</Box>;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        mt: "3em",
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: ".2em", color: "primary.dark" }}>
        Don't Feel Left Out!
      </Typography>
      <Typography variant="h4" sx={{ color: "primary.dark", mb: "2em" }}>
        Come Check Out Some of My Favorite Things!
      </Typography>
      <Box
        sx={{
          height: "auto",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {shopSections.map((section) => (
          <ShopButton
            key={section}
            active={activeSection === section}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </ShopButton>
        ))}
      </Box>
    </Box>
  );
};
export default shopHeader;
