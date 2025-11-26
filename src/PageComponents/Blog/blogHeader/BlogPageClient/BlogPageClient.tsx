"use client";
import { useState, useMemo } from "react";
import BlogFilterItem from "./blogFilter/blogFilterList";
import PostsGridClient from "./blogPosts/PostGridsClient";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  posts: any[];
  groups: any[];
};

export default function BlogPageClient({ posts, groups }: Props) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filteredPosts = useMemo(() => {
    if (selectedFilters.length === 0) return posts;

    return posts.filter((post) =>
      post?.tags?.some((tag) => selectedFilters.includes(tag.slug))
    );
  }, [posts, selectedFilters]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "205vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "95%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        {/* LEFT SIDEBAR — ORIGINAL BLOGFILTER STYLING */}
        <Box
          sx={{
            height: "100%",
            paddingTop: "10em",
            width: "30%",
            backgroundColor: "primary.main",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "85%",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
                width: "100%",
                fontWeight: "bold",
              }}
            >
              Recipe Index
            </Typography>

            <Typography variant="body2" sx={{ color: "secondary.main" }}>
              Choose as many filters as you’d like to find your dish! You can
              select multiple so do not be shy!
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 1,
              }}
            >
              {groups.map((g) => (
                <BlogFilterItem
                  key={g.type}
                  heading={g.heading}
                  options={g.options}
                  value={selectedFilters}
                  onChange={setSelectedFilters}
                  defaultOpen
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* RIGHT CONTENT — POSTS GRID */}
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "60%",
            },
            paddingTop: "10em",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "2em" }}>
            Our Latest Blogs
          </Typography>

          <PostsGridClient initialPosts={filteredPosts} pageSize={9} />
        </Box>
      </Box>
    </Box>
  );
}
