"use client";
import React from "react";
import HomeHeader from "./homeHeader.js";
import HomeCookbook from "./homeCookbook.js";
import HomeLearnMore from "./homeLearnMore.js";
import HomeBlog from "./homeBlog.js";
import HomeShop from "./homeShop.js";
import HomeContact from "./homeContact/homeContact.js";
import { Box } from "@mui/material";

const Home = ({ headerData }) => {
  console.log("HEADERDATA IN HOME:", headerData);
  return (
    <div>
      <HomeHeader headerData={headerData} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "background.line",
        }}
      />
      <HomeCookbook />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "background.line",
        }}
      />
      <HomeLearnMore />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "background.line",
        }}
      />
      <HomeBlog />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "background.line",
        }}
      />
      <HomeShop />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "background.line",
        }}
      />
      <HomeContact />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
    </div>
  );
};

export default Home;
