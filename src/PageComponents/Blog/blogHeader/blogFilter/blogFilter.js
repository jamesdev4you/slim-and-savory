import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BlogFilterList from "./blogFilterList";
const BlogFilter = () => {
  return (
    <Box
      sx={{
        height: "100%",
        paddingTop: "8em",
        width: "25%",
        backgroundColor: "primary.main",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "start",
            color: "secondary.main",
            fontWeight: "bold",
          }}
        >
          Recipe Index
        </Typography>

        <Typography
          variant="p"
          sx={{ textAlign: "start", color: "secondary.main" }}
        >
          Choose as many filters as you'd like to find your dish!
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          <BlogFilterList />
        </Box>
      </Box>
    </Box>
  );
};
export default BlogFilter;
