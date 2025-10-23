import React from "react";
import { Typography, Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LabelLogo from "../assets/LabelLogo.png";
import food1 from "../assets/food1.jpg";

const aboutheader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "12vh",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0em 3em",
        }}
      >
        <Box
          sx={{
            width: "30vw",
            height: "70%",
            backgroundImage: `url(${food1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            width: "50%",
            padding: "3em 0em",
            height: { xl: "90%", md: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "primary.dark", fontWeight: "bold" }}
          >
            My Name Is Suzie and my Passion is to make everything
          </Typography>
          <Box
            sx={{
              width: "75%",
              height: "100px",
              backgroundImage: `url(${LabelLogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            My passion is to make food that is healthy and tasty. All my dishes
            are made for you to enjoy losing weight!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default aboutheader;
