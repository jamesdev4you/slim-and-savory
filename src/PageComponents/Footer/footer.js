import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../index.css";
import "../../navlink.css";

const Footer = () => {
  return (
    <Box
      sx={{ width: "100%", height: "100%", backgroundColor: "primary.main" }}
    >
      <Box
        sx={{
          width: "90%",
          height: "auto",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
          flexWrap: "wrap",
          color: "background.default",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Birds",
              marginBottom: "20px",
              borderBottom: "1px solid white",
            }}
            variant="h5"
          >
            {" "}
            Pages{" "}
          </Typography>
          <Typography>
            <NavLink to="/" className="nav_link">
              {" "}
              Blogs{" "}
            </NavLink>
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/shop" className="nav_link">
              Shop
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/aboutme" className="nav_link">
              About Me
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/contactme" className="nav_link">
              Contact Me
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/contactme" className="nav_link">
              Press
            </NavLink>{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Birds",
              marginBottom: "20px",
              borderBottom: "1px solid white",
            }}
            variant="h5"
          >
            {" "}
            Blogs{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/appointment" className="nav_link">
              Thai{" "}
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/appointment" className="nav_link">
              Chinese
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/appointment" className="nav_link">
              Carribean
            </NavLink>{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Birds",
              marginBottom: "20px",
              borderBottom: "1px solid white",
            }}
            variant="h5"
          >
            {" "}
            Contact{" "}
          </Typography>
          <Typography>
            <a
              href="tel:7274879698"
              style={{ color: "white", textDecoration: "none" }}
            >
              (999) 999-9999
            </a>
          </Typography>
          <Typography> jamesdev4you@gmail.com</Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Birds",
              marginBottom: "20px",
              borderBottom: "1px solid white",
            }}
            variant="h5"
          >
            {" "}
            Hours{" "}
          </Typography>
          <Typography> Mon: 9am-8pm</Typography>
          <Typography> Tues: 9am-8pm</Typography>
          <Typography> Weds: 9am-8pm</Typography>
          <Typography> Thurs: 9am-8pm</Typography>
          <Typography> Fri: 9am-8pm </Typography>
          <Typography> Sat: 9am-8pm </Typography>
          <Typography> Sun: 9am-8pm </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
