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
        mt: { xs: "7em", md: "3em" },
        mb: { xs: "7em", md: "0em" },
        height: { xs: "auto", md: "60vh", lg: "80vh" },
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
      <Typography
        variant="h4"
        sx={{
          color: "primary.dark",
          mb: { xs: "1em", sm: "2em" },
          display: { xs: "none", md: "inline" },
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "primary.dark",
          mb: { xs: "1em", sm: "2em" },
          display: { xs: "inline", md: "none" },
        }}
      >
        {subtitle}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          gap: "1em",
        }}
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
