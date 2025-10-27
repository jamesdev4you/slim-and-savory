"use client";
import React from "react";
import AboutHeader from "../AboutMe/aboutheader.js";
import AboutDescription from "../AboutMe/aboutdescription.js";
import AboutMeShop from "../AboutMe/aboutmeshop.js";
import { Box } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <AboutHeader />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
      <AboutDescription />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
      <AboutMeShop />
    </Box>
  );
};
export default AboutMe;
