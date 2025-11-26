"use client";
import * as React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
// If you have this button, keep it. Otherwise replace with a <Link> or MUI Button.
import { DarkButtonBlog } from "../../../../Styled/styledButtons.js"; // adjust path if needed

export default function PostsGridClient({ initialPosts, pageSize = 9 }) {
  const [page, setPage] = React.useState(1);

  const total = initialPosts?.length ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  React.useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const start = (page - 1) * pageSize;
  const pagePosts = (initialPosts || []).slice(start, start + pageSize);

  const goToPage = (p) => setPage(Math.min(Math.max(1, p), totalPages));
  const next = () => goToPage(page + 1);
  const prev = () => goToPage(page - 1);

  {
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* 3x3 responsive grid. Only renders real posts; no dummy cards. */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)", // 3-wide on desktop
          },
          gap: 2,
        }}
      >
        {pagePosts.map((post) => {
          console.log("FULL POST OBJECT:", post);

          const slug =
            typeof post.slug === "string" ? post.slug : post.slug?.current;

          if (!slug) {
            console.warn("Post missing slug:", post.title);
            return null;
          }

          return (
            <Link
              key={post._id}
              href={`/blog/${slug}`}
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
                  "&:hover": { cursor: "pointer" },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: { xl: "50vh", md: "30vh", sm: "30vh", xs: "180px" },
                    backgroundImage: `url(${post?.mainPicture?.url ?? ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#f2f2f2",
                  }}
                  aria-label={
                    post?.mainPicture?.alt || post?.title || "Blog image"
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
                    alignItems: "start",
                    flexDirection: "column",
                    gap: ".5em",
                  }}
                >
                  <Typography variant="h6" sx={{ height: "10vh" }}>
                    {post?.title ?? ""}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post?.category?.title ?? "—"} {" | "}
                    {post?.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString()
                      : ""}
                  </Typography>
                  <DarkButtonBlog>Read</DarkButtonBlog>
                </Box>
              </Box>
            </Link>
          );
        })}
        {/* If fewer than 9 posts, empty cells simply don't render—space remains empty. */}
      </Box>

      {/* Pagination */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: "1em",
        }}
      >
        {/* Prev */}
        <Typography
          variant="body1"
          sx={{
            opacity: page > 1 ? 1 : 0.4,
            textDecoration: page > 1 ? "underline" : "none",
            "&:hover": { cursor: page > 1 ? "pointer" : "default" },
          }}
          onClick={() => (page > 1 ? prev() : undefined)}
        >
          Prev
        </Typography>

        {/* Page numbers */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Typography
              key={n}
              variant="body1"
              sx={{
                textDecoration: n === page ? "underline" : "none",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => goToPage(n)}
            >
              {n}
            </Typography>
          ))}
        </Box>

        {/* Next */}
        <Typography
          variant="body1"
          sx={{
            opacity: page < totalPages ? 1 : 0.4,
            textDecoration: page < totalPages ? "underline" : "none",
            "&:hover": { cursor: page < totalPages ? "pointer" : "default" },
          }}
          onClick={() => (page < totalPages ? next() : undefined)}
        >
          Next
        </Typography>
      </Box>
    </Box>
  );
}
