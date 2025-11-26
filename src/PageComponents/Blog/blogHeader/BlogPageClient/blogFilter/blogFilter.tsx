import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchAllFilterGroups } from "@/sanity/fetchFilterOptions";
import BlogFilterItem from "./blogFilterList"; // client component

export default async function BlogFilter() {
  const groups = await fetchAllFilterGroups();

  return (
    <Box
      sx={{
        height: "100%",
        paddingTop: "10em",
        width: "100%",
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
          sx={{ color: "secondary.main", width: "100%", fontWeight: "bold" }}
        >
          Recipe Index
        </Typography>
        <Typography variant="body2" sx={{ color: "secondary.main" }}>
          Choose as many filters as you’d like to find your dish! You can select
          multiple so do not be shy!
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
              value={selected}
              onChange={onChange}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
