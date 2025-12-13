"use client";

import { Box, Typography } from "@mui/material";
import { ShopButton } from "@/PageComponents/Styled/styledButtons";
const ShopHeader = ({
  title,
  subtitle,
  activeSection,
  setActiveSection,
  shopSections,
}) => {
  return (
    <Box
      sx={{
        mt: "3em",
        height: "70vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography variant="h2" sx={{ color: "primary.dark" }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ color: "primary.dark", mb: "2em" }}>
        {subtitle}
      </Typography>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        {shopSections.map((section) => (
          <ShopButton
            key={section.value}
            active={activeSection === section.value}
            onClick={() => setActiveSection(section.value)}
          >
            {section.label}
          </ShopButton>
        ))}
      </Box>
    </Box>
  );
};

export default ShopHeader;
