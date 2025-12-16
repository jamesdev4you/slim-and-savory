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
    activeSection === "all"
      ? items
      : items.filter((item) => item.category?.value === activeSection);

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
        justifyContent: "start",
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
              minWidth: { md: "180px", lg: "230px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1em",
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
                backgroundImage: item.image?.asset?.url
                  ? `url(${item.image?.asset?.url})`
                  : "none",

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: {
                  xl: "40vh",
                  lg: "40vh",
                  md: "20vh",
                  sm: "30vh",
                  xs: "180px",
                },
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px",
                "&:hover": { transform: "scale(1.02)" },
                transition: "transform 0.3s ease-in-out",
              }}
            />

            {/* Title under image */}
            <Typography
              sx={{
                mt: 1.5,
                fontSize: { md: "18px", lg: "24px" },
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
