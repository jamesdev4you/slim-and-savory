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
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        pb: { xs: "10vh", md: "none" },
        pt: { xs: "10vh", md: "none" },
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
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "none", md: "0em 3em" },
        }}
      >
        {/* IMAGE */}
        <Box
          sx={{
            width: { xs: "80%", md: "25%", lg: "30%" },
            aspectRatio: "4 / 5",
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
            width: { xs: "100%", md: "75%", lg: "70%" },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            gap: { lg: "none", xl: ".5em" },
          }}
        >
          <Typography variant="h5" sx={{ color: "primary.dark" }}>
            {ctaText}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "primary.dark",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>

          {/* DESCRIPTION */}
          <Box
            sx={{
              color: "primary.dark",

              fontSize: "20px",
              width: { xs: "80%", md: "100%" },
              textAlign: "center",
              "& p": {
                lineHeight: "1",

                marginBottom: { xs: ".1em", md: "1rem" },
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
                  width: { xs: "250px", md: "200px", xl: "200px" },
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
