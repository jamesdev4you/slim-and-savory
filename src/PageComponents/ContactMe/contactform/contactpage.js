"use client";
import React from "react";
import ContactForm from "./contactForm";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

// icons unchanged
import FacebookIcon from "@mui/icons-material/Facebook";
import TikTokIcon from "../tiktokIcon";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialIcons = [
  {
    Icon: TikTokIcon,
    href: "https://www.tiktok.com/@slimandsavory",
    platform: "TikTok",
  },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/slimandsavory/",
    platform: "Instagram",
  },
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/SlimandSavory/",
    platform: "Facebook",
  },
  {
    Icon: YouTubeIcon,
    href: "https://www.youtube.com/@SlimSavory",
    platform: "YouTube",
  },
];

const ContactPage = ({ subtitle, title, description, ctaLabel, ctaHref }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundColor: "secondary.main",
        paddingTop: "50px",
        padding: "2em",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0em 3em",
          }}
        >
          <Box
            sx={{
              width: "70%",
              gap: "1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "100%",
                  lg: "100%",
                  md: "100%",
                  sm: "90%",
                  xs: "100%",
                },
                height: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: {
                  xl: "0px",
                  lg: "0px",
                  md: "50px",
                  sm: "50px",
                  xs: "50px",
                },
                marginTop: {
                  xl: "0px",
                  lg: "0px",
                  md: "50px",
                  sm: "50px",
                  xs: "50px",
                },
              }}
            >
              <ContactForm />
            </Box>
          </Box>
          <Box
            sx={{
              width: "70%",
              padding: "3em 0em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" sx={{ color: "primary.dark" }}>
              {subtitle}
            </Typography>

            <Typography variant="h3" sx={{ color: "primary.dark" }}>
              {title}
            </Typography>

            <Box
              sx={{
                color: "primary.dark",
                fontSize: "20px",
                width: "100%",
                textAlign: "left",
              }}
            >
              <PortableText value={description} />
            </Box>

            {/* SOCIAL ICONS (unchanged) */}
            <Box
              sx={{
                width: { xl: "40%", md: "60%" },
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {socialIcons.map(({ Icon, href, platform }) => (
                <IconButton
                  key={platform}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "primary.dark",
                    color: "white",
                    padding: "10px",
                    border: "1px solid transparent",
                    "&:hover": {
                      borderColor: "primary.light",
                      color: "primary.light",
                      backgroundColor: "primary.dark",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    },
                  }}
                >
                  <Icon fontSize="large" />
                </IconButton>
              ))}
            </Box>

            <Button
              variant="contained"
              href={ctaHref}
              sx={{
                width: "30%",
                marginTop: "2em",
                backgroundColor: "#373e02",
                color: "#d9d9d9",
                border: "2px solid #d9d9d9",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "primary.light",
                },
              }}
            >
              {ctaLabel}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
