import React from "react";
import NavBar from "../NavBar/navbar.js";
import Footer from "../Footer/footer.js";
import AboutHeader from "../AboutMe/aboutheader.js";
import AboutDescription from "../AboutMe/aboutdescription.js";
import AboutMeShop from "../AboutMe/aboutmeshop.js";
import { Box } from "@mui/material";

const aboutme = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
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
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "secondary.main",
        }}
      />
      <Footer />
    </div>
  );
};
export default aboutme;
