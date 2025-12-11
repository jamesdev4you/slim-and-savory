"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ShopItems = ({ activeSection, items }) => {
  // 🔥 Prevent undefined access
  if (!items || !Array.isArray(items)) {
    return (
      <Typography variant="h3" sx={{ color: "primary.dark" }}>
        Loading products...
      </Typography>
    );
  }

  const filteredItems =
    activeSection === "All Products"
      ? items
      : items.filter((item) => item.category === activeSection);

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
      {filteredItems.length === 0 ? (
        <Typography variant="h3" sx={{ color: "primary.dark" }}>
          No items available for {activeSection} ... :(
        </Typography>
      ) : (
        filteredItems.map((item) => (
          <Box
            key={item._id}
            sx={{
              width: "23%",
              minWidth: "230px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Image Box */}
            <Box
              component="a"
              href={item.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "100%",
                borderRadius: "8px",
                backgroundImage: `url(${item.image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: { xl: "40vh", md: "30vh", sm: "30vh", xs: "180px" },
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px",
                "&:hover": { transform: "scale(1.02)" },
                transition: "transform 0.3s ease-in-out",
              }}
            />

            {/* Title under image */}
            <Typography
              sx={{
                mt: 1.5,
                fontSize: "24px",
                color: "primary.main",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ShopItems;
