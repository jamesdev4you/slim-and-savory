"use client";
import Link from "next/link";
import { Typography, Box } from "@mui/material";
import { DarkButtonBlog } from "../Styled/styledButtons.js";
import { useTheme, useMediaQuery } from "@mui/material";

const HomeBlog = ({ posts }) => {
  if (!posts?.length) return null;
  const theme = useTheme();

  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isLG = useMediaQuery(theme.breakpoints.only("lg"));
  const isMD = useMediaQuery(theme.breakpoints.only("md"));
  const isSM = useMediaQuery(theme.breakpoints.only("sm"));

  const visiblePosts = (() => {
    if (isXL) return posts.slice(0, 8);
    if (isMD || isLG) return posts.slice(0, 6); // ✅ 2 less on md
    if (isSM) return posts.slice(0, 4);
    return posts.slice(0, 4); // xs
  })();

  return (
    <Box
      sx={{
        width: "90%",
        minHeight: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        p: 2,
        mt: 2,
      }}
    >
      {/* Header — unchanged */}
      <Box
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4">Our Latest Blogs</Typography>

        <Typography
          component={Link}
          href="/recipes"
          variant="h6"
          color="text.secondary"
          sx={{
            display: { xs: "none", md: "flex" },
            textDecoration: "underline",
            transition: "all .3s ease-in-out",
            "&:hover": {
              cursor: "pointer",
              color: "primary.light",
            },
          }}
        >
          Updated Weekly
        </Typography>
      </Box>

      {/* Cards — same flex layout */}
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          gap: 2,
        }}
      >
        {visiblePosts.map((post) => {
          const slug =
            typeof post.slug === "string" ? post.slug : post.slug?.current;

          return (
            <Link
              key={post._id}
              href={`/recipes/${slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                maxWidth: "220px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",

                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "2em",
                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  },
                }}
              >
                {/* Image — same sizing */}
                <Box
                  sx={{
                    height: {
                      xl: "30vh",
                      lg: "20vh",
                      md: "20vh",
                      sm: "30vh",
                      xs: "180px",
                    },
                    backgroundImage: `url(${
                      post?.mainPicture?.asset?.url ?? ""
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#f2f2f2",
                  }}
                />

                {/* Content — same spacing */}
                <Box
                  sx={{
                    pl: 2,
                    pr: 2,
                    pt: 1,
                    pb: 2,
                    textAlign: "left",
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                    gap: ".5em",
                    height: "170px",
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: "auto" }}>
                    {post.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginLeft: { lg: ".1em", xl: "none" } }}
                  >
                    {post?.category?.title ?? "RECIPE"}
                  </Typography>

                  <DarkButtonBlog>Read</DarkButtonBlog>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default HomeBlog;
