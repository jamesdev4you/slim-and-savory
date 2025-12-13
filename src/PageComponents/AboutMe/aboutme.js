"use client";
import React from "react";
import { useEffect, useState } from "react";
import AboutHeader from "./aboutheader";
import AboutDescription from "./aboutdescription";
import { fetchAboutHeader } from "@/sanity/fetchAboutHeader";
import { fetchAboutDescription } from "@/sanity/fetchAboutDescription";
import AboutMeShop from "../AboutMe/aboutmeshop.js";
import HomeShop from "@/PageComponents/Home/homeShop";
import { Box } from "@mui/material";

const AboutMe = () => {
  const [headerData, setHeaderData] = useState(null);
  const [descriptionData, setDescriptionData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const header = await fetchAboutHeader();
      const description = await fetchAboutDescription();

      setHeaderData(header);
      setDescriptionData(description);
    }

    loadData();
  }, []);

  if (!headerData || !descriptionData) return null;

  return (
    <Box>
      <AboutHeader data={headerData} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.main",
        }}
      />
      <AboutDescription data={descriptionData} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.main",
        }}
      />
      <HomeShop />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.main",
        }}
      />
    </Box>
  );
};
export default AboutMe;
