import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        <Typography variant="h4" sx={{ textAlign: "start" }}>
          Recipe Index
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "1em", textAlign: "start" }}>
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
        ></Box>
      </Box>
    </Box>
  );
};
export default BlogFilter;
