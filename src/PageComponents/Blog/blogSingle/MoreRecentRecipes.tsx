"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import { DarkButtonBlog } from "@/PageComponents/Styled/styledButtons";

export default function MoreRecentRecipes({ posts }) {
  if (!posts?.length) return null;

  return (
    <Box
      sx={{
        width: "100%",
        padding: "4em 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Typography variant="h4" sx={{ mb: "1.5em" }}>
          More Recent Recipes
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {posts.map((post) => {
            const imageUrl = post.mainPicture
              ? urlFor(post.mainPicture).width(900).height(600).url()
              : "";

            const slug =
              typeof post.slug === "string" ? post.slug : post.slug?.current;

            return (
              <Link
                key={post._id}
                href={`/recipes/${slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      cursor: "pointer",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      height: {
                        xl: "50vh",
                        lg: "40vh",
                        md: "20vh",
                        sm: "30vh",
                        xs: "180px",
                      },
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#f2f2f2",
                    }}
                    aria-label={
                      post?.mainPicture?.alt || post?.title || "recipe image"
                    }
                    role="img"
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      pl: 2,
                      pr: 2,
                      pt: 1,
                      pb: 2,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      gap: ".5em",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ minHeight: "3em", color: "primary.dark" }}
                    >
                      {post?.title ?? ""}
                    </Typography>

                    <DarkButtonBlog>Read</DarkButtonBlog>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
