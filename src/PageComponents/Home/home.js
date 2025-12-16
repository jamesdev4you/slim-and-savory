"use client";
import React from "react";
import HomeHeader from "./homeHeader.js";
import HomeCookbook from "./homeCookbook.js";
import HomeLearnMore from "./homeLearnMore.js";
import HomeBlog from "./homeBlog.js";
import HomeShop from "./homeShop.js";
import HomeContact from "./homeContact/homeContact.js";
import { Box } from "@mui/material";

const Home = ({ headerData, cookbookData, learnMoreData, homePosts }) => {
  return (
    <div>
      <HomeHeader headerData={headerData} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.light",
        }}
      />
      <HomeCookbook cookbookData={cookbookData} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.light",
        }}
      />
      <HomeLearnMore learnMoreData={learnMoreData} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.light",
        }}
      />
      <HomeBlog posts={homePosts} />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.light",
        }}
      />
      <HomeShop />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "primary.light",
        }}
      />
      <HomeContact />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.light",
        }}
      />
    </div>
  );
};

export default Home;
