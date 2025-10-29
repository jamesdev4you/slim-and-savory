import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchAllFilterGroups } from "@/sanity/fetchFilterOptions";
import BlogFilterItem from "./blogFilterList"; // client component

export default async function BlogFilter() {
  const groups = await fetchAllFilterGroups();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100%",
        paddingTop: "8em",
        width: "30%",
        backgroundColor: "primary.main",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "secondary.main", width: "100%", fontWeight: "bold" }}
        >
          Recipe Index
        </Typography>
        <Typography variant="body2" sx={{ color: "secondary.main" }}>
          Choose as many filters as you’d like to find your dish!
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
              defaultOpen
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
