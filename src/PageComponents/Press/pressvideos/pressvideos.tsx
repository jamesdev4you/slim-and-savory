"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image"; // ensure this helper exists

const PressVideos = ({ videos }: { videos: any[] }) => {
  console.log("VIDEO THUMB:", videos);

  return (
    <Box sx={{ width: "auto" }}>
      {videos.map((video, index) => {
        const isEven = index % 2 === 0;

        const bgColor = isEven ? "secondary.main" : "primary.main";
        const btnColor = isEven ? "primary.main" : "secondary.main";
        const textColor = isEven ? "primary.main" : "secondary.main";

        return (
          <Box
            key={video._id || index}
            sx={{
              height: "80vh",
              width: "100%",
              backgroundColor: bgColor,
              borderBottom: "1px solid",
              borderColor: "secondary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3em",
              transition: "background-color 0.3s ease", // smooth
            }}
          >
            {/* Thumbnail */}
            <Box
              sx={{
                width: "40vw",
                height: "55%",
                position: "relative",
                borderRadius: "5px",
                overflow: "hidden",
                border: "1px solid",
                borderColor: textColor,
              }}
            >
              <Image
                src={urlFor(video.thumbnail).url()}
                alt={video.title}
                fill
                style={{ objectFit: "cover", marginBottom: "2em" }}
              />
            </Box>

            {/* Content */}
            <Box
              sx={{
                width: "35vw",
                height: "60%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: ".75em",
              }}
            >
              <Typography variant="h3" sx={{ color: textColor }}>
                {video.title}
              </Typography>

              <Typography variant="body1" sx={{ color: textColor }}>
                {video.description}
              </Typography>

              <Button
                component={Link}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  backgroundColor: btnColor,
                  color: bgColor,
                  borderRadius: "15px",
                  fontWeight: "bold",
                  borderWidth: `2px`,
                  borderStyle: "solid",
                  borderColor: textColor,
                  mt: "1em",
                  "&:hover": {
                    backgroundColor: bgColor,
                    color: textColor,
                    borderWidth: `2px`,
                    borderStyle: "solid",
                    borderColor: textColor,
                  },
                }}
              >
                Watch Video
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default PressVideos;
