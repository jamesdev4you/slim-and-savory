// src/components/Footer.tsx  (or wherever you keep components)
"use client";

import Link from "next/link";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "primary.main" }}>
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          py: 3,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          color: "background.default",
        }}
      >
        {/* Pages */}
        <Box
          sx={{
            width: { xl: "20%", lg: "20%", md: "50%", sm: "50%", xs: "90%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Pages
          </Typography>

          <Link
            href="/"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Blogs
            </Typography>
          </Link>

          <Link
            href="/shop"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Shop
            </Typography>
          </Link>

          <Link
            href="/about"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              About Me
            </Typography>
          </Link>

          <Link
            href="/contact"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Contact Me
            </Typography>
          </Link>

          <Link
            href="/press"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Press
            </Typography>
          </Link>
        </Box>

        {/* Blogs */}
        <Box
          sx={{
            width: { xl: "20%", lg: "20%", md: "50%", sm: "50%", xs: "90%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Blogs
          </Typography>
          <Link
            href="/about"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Dinosaur nuggets
            </Typography>
          </Link>

          <Link
            href="/contact"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Mexican food
            </Typography>
          </Link>

          <Link
            href="/press"
            className="nav_link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "Birds",
                textTransform: "none",
                color: "white",
                transition: "all .1s ease",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Chinese food
            </Typography>
          </Link>
        </Box>

        {/* Contact */}
        <Box
          sx={{
            width: { xl: "20%", lg: "20%", md: "50%", sm: "50%", xs: "90%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Contact
          </Typography>
          <Typography>
            <a
              href="tel:7274879698"
              style={{ color: "white", textDecoration: "none" }}
            >
              (999) 999-9999
            </a>
          </Typography>
          <Typography>jamesdev4you@gmail.com</Typography>
        </Box>

        {/* Hours */}
        <Box
          sx={{
            width: { xl: "20%", lg: "20%", md: "50%", sm: "50%", xs: "90%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Birds", mb: 2, borderBottom: "1px solid white" }}
          >
            Hours
          </Typography>
          <Typography>Mon: 9am-8pm</Typography>
          <Typography>Tues: 9am-8pm</Typography>
          <Typography>Weds: 9am-8pm</Typography>
          <Typography>Thurs: 9am-8pm</Typography>
          <Typography>Fri: 9am-8pm</Typography>
          <Typography>Sat: 9am-8pm</Typography>
          <Typography>Sun: 9am-8pm</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
