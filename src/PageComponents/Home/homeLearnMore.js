"use client";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

// icons unchanged
import FacebookIcon from "@mui/icons-material/Facebook";
import TikTokIcon from "./tiktokIcon";
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

const HomeLearnMore = ({ learnMoreData }) => {
  if (!learnMoreData) return null;

  const { subtitle, title, description, image } = learnMoreData;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "70vh",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "80%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0em 3em",
        }}
      >
        {/* TEXT CONTENT */}
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
              marginTop: "1em",
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
            href="/contact"
            sx={{
              width: "30%",
              marginTop: "1em",
              backgroundColor: "#373e02",
              color: "#d9d9d9",
              border: "2px solid #d9d9d9",
              fontWeight: "bold",
              "&:hover": {
                borderColor: "primary.light",
              },
            }}
          >
            Reach Out!
          </Button>
        </Box>

        {/* IMAGE */}
        <Box sx={{ width: "40%", height: "90%", position: "relative" }}>
          <Image
            src={urlFor(image).width(800).height(1000).url()}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLearnMore;
