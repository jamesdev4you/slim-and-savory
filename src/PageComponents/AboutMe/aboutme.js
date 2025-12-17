"use client";

import React from "react";
import AboutHeader from "./aboutheader";
import AboutDescription from "./aboutdescription";
import HomeShop from "@/PageComponents/Home/homeShop";
import { Box } from "@mui/material";

const AboutMe = ({ headerData, descriptionData, shopItems }) => {
  if (!headerData || !descriptionData) return null;

  return (
    <Box>
      <AboutHeader data={headerData} />

      <Box
        sx={{ width: "100%", height: "1px", backgroundColor: "primary.main" }}
      />

      <AboutDescription data={descriptionData} />

      <Box
        sx={{ width: "100%", height: "1px", backgroundColor: "primary.main" }}
      />

      <HomeShop items={shopItems.slice(0, 5)} />

      <Box
        sx={{ width: "100%", height: "1px", backgroundColor: "primary.main" }}
      />
    </Box>
  );
};

export default AboutMe;
