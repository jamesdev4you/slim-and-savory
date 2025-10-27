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

          <Typography>
            <Link href="/" className="nav_link">
              Blogs
            </Link>
          </Typography>
          <Typography>
            <Link href="/shop" className="nav_link">
              Shop
            </Link>
          </Typography>
          <Typography>
            <Link href="/about" className="nav_link">
              About Me
            </Link>
          </Typography>
          <Typography>
            <Link href="/contact" className="nav_link">
              Contact Me
            </Link>
          </Typography>
          <Typography>
            <Link href="/press" className="nav_link">
              Press
            </Link>
          </Typography>
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
          <Typography>
            <Link href="/appointment" className="nav_link">
              Thai
            </Link>
          </Typography>
          <Typography>
            <Link href="/appointment" className="nav_link">
              Chinese
            </Link>
          </Typography>
          <Typography>
            <Link href="/appointment" className="nav_link">
              Caribbean
            </Link>
          </Typography>
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
