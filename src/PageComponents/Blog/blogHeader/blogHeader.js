// Server component (no "use client")
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BlogFilter from "./blogFilter/blogFilter";
import PostsGridClient from "./PostGridsClient";
import { fetchPosts } from "../../../sanity/posts";

export default async function BlogHeader() {
  // Fetch once on the server (keeps tokens off the client, uses your existing "way")
  const posts = await fetchPosts(); // already ordered by date in GROQ

  return (
    <Box
      sx={{
        width: "100%",
        height: "200vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "85%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        {/* Left column: BlogFilter ~30% */}
        <Box
          sx={{
            width: { xs: "100%", lg: "25%" },
            height: "100%",
          }}
        >
          <BlogFilter />
        </Box>

        {/* Right column: Posts grid (3x3) with pagination */}
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "70%",
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

          <PostsGridClient initialPosts={posts} pageSize={9} />
        </Box>
      </Box>
    </Box>
  );
}
