"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image"; // ensure this helper exists

const PressVideos = ({ videos }: { videos: any[] }) => {
  return (
    <Box sx={{ width: "auto", minHeight: "100vh" }}>
      {videos.map((video, index) => (
        <Box
          key={video._id || index}
          sx={{
            height: "80vh",
            width: "100%",
            backgroundColor: "primary.main",
            borderColor: "secondary.main",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3em",
            flexDirection: "row",
            padding: "2em 0",
          }}
        >
          {/* Thumbnail */}
          <Box
            sx={{
              width: "40vw",
              height: "60%",
              position: "relative",
              borderRadius: "5px",
              overflow: "hidden",
              border: "1px solid",
              borderColor: "secondary.light",
            }}
          >
            <Image
              src={urlFor(video.thumbnail).url()}
              alt={video.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Content */}
          <Box
            sx={{
              width: "35vw",
              height: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Typography variant="h2" sx={{ color: "secondary.light" }}>
              {video.title}
            </Typography>

            <Typography variant="h3" sx={{ color: "secondary.light" }}>
              {video.description}
            </Typography>

            <Button
              component={Link}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                width: { xl: "30%", md: "30%" },
                height: "40px",
                fontSize: { xl: "1em", md: "1em" },
                backgroundColor: "#373e02",
                borderRadius: "15px",
                color: "#d9d9d9",
                border: "2px solid #d9d9d9",
                fontWeight: "bold",
                marginTop: { xl: "1em", md: "1em" },
                "&:hover": {
                  borderColor: "#D2691E",
                },
              }}
            >
              Watch Video
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PressVideos;
