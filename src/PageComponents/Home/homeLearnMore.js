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
        flexDirection: { xs: "column", sm: "column", md: "row" },

        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        pb: { xs: "10vh", md: "none" },
        pt: { xs: "5vh", md: "none" },
        height: { xs: "auto", md: "50vh", lg: "70vh" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "90%", lg: "80%" },
          gap: { xs: "5em", md: "none" },
          height: "auto",
          backgroundColor: "background.dark",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "none", md: "0em 3em" },
        }}
      >
        {/* TEXT CONTENT */}
        <Box
          sx={{
            width: { xs: "80%", md: "75%", lg: "70%" },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            gap: { lg: "none", xl: ".5em" },
          }}
        >
          <Typography variant="h4" sx={{ color: "primary.dark" }}>
            {subtitle}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "primary.dark",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              color: "primary.dark",
              fontSize: "20px",
              width: "100%",
              textAlign: { xs: "center", md: "center" },
              "& p": {
                lineHeight: "1",
                marginBottom: "1rem",
              },
            }}
          >
            <PortableText value={description} />
          </Box>

          {/* SOCIAL ICONS (unchanged) */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%", xl: "40%" },
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
              marginTop: "2em",
              width: { xs: "100%", md: "200px", xl: "200px" },
              height: "40px",
              borderRadius: "0px",
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
        <Box
          sx={{
            width: { xs: "80%", md: "25%", lg: "30%" },
            aspectRatio: "4 / 5",
            position: "relative",
          }}
        >
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
