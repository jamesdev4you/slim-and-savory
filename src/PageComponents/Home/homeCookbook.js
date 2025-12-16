"use client";

import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";

const HomeCookbook = ({ cookbookData }) => {
  if (!cookbookData) return null;

  const { title, ctaText, description, image, buttonText, bookLink } =
    cookbookData;

  const imageUrl = image ? urlFor(image).width(600).height(800).url() : null;

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
          backgroundColor: "background.dark",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0em 3em",
        }}
      >
        {/* IMAGE */}
        <Box
          sx={{
            width: "30%",
            height: "85%",
            position: "relative",
          }}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            width: "70%",
            padding: "3em 0em",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            marginTop: "3%",
            gap: { lg: "none", xl: ".5em" },
          }}
        >
          <Typography variant="h5" sx={{ color: "primary.dark" }}>
            {ctaText}
          </Typography>

          <Typography
            variant="h3"
            sx={{ color: "primary.dark", fontWeight: "bold" }}
          >
            {title}
          </Typography>

          {/* DESCRIPTION */}
          <Box
            sx={{
              color: "primary.dark",
              fontSize: "20px",
              width: "100%",
              textAlign: "center",
              "& p": {
                lineHeight: "1",
                marginBottom: "1rem",
              },
            }}
          >
            <PortableText value={description} />
          </Box>

          {/* BUTTON */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1em",
              width: "100%",
            }}
          >
            <Link href={bookLink || "#"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  width: { xl: "200px", md: "200px" },
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
                {buttonText || "Learn More"}
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCookbook;
