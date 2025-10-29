import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BlogFilter from "./blogFilter/blogFilter";
import BlogPosts from "./blogPosts";
const BlogHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "85%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BlogFilter />
        <BlogPosts />
      </Box>
    </Box>
  );
};
export default BlogHeader;
