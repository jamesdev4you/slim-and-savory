"use client";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { fetchPosts } from "../../../sanity/fetchPosts";
import { urlFor } from "../../../sanity/image";

export default async function BlogPosts() {
  const posts = await fetchPosts();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        p: 2,
        mt: 2,
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4">Our Latest Blogs</Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            textDecoration: "underline",
            "&:hover": { cursor: "pointer", color: "primary.light" },
          }}
        >
          Updated Weekly
        </Typography>
      </Box>

      {/* Grid */}
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {posts.map((p) => {
          const imgUrl = p.mainPicture?.asset
            ? urlFor(p.mainPicture).width(1200).height(800).fit("crop").url()
            : "/images/placeholder.jpg"; // optional fallback
          const date = p.publishedAt
            ? new Date(p.publishedAt).toISOString().slice(0, 10)
            : "";

          return (
            <Box
              key={p._id}
              sx={{
                width: "23%",
                minWidth: "230px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                mb: "2em",
                "&:hover": { cursor: "pointer" },
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <Box
                sx={{
                  height: { xl: "50vh", md: "30vh", sm: "30vh", xs: "180px" },
                  backgroundImage: `url(${imgUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label={p.mainPicture?.alt || p.title}
                role="img"
              />

              <Box
                sx={{
                  pl: 2,
                  pr: 2,
                  pt: 1,
                  pb: 2,
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5em",
                }}
              >
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.category || "Uncategorized"} {date && `| ${date}`}
                </Typography>

                <Button
                  component={Link}
                  href={p.slug ? `/blog/${p.slug}` : "#"}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 0.5 }}
                  disabled={!p.slug}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
