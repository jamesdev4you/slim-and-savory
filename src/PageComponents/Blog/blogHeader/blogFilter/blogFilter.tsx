"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FilterSection from "./blogFilterList";
import { fetchAllFilterGroups } from "../../../../sanity/fetchFilterOptions";

type FilterOption = { title: string; value: string };
type Group = { heading: string; type: string; options: FilterOption[] };

const BlogFilter: React.FC = () => {
  const [groups, setGroups] = React.useState<Group[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchAllFilterGroups(); // must be browser-safe
        if (mounted) setGroups(data);
      } catch (e) {
        if (mounted) setError("Failed to load filters.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100%",
        paddingTop: "8em",
        width: "25%",
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 1.5,
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

        <Typography variant="body2" sx={{ color: "secondary.main" }}>
          Choose as many filters as you’d like to find your dish!
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column", // stack sections
            gap: 2,
            mt: 1,
          }}
        >
          {loading && (
            <Typography variant="body2" sx={{ color: "secondary.main" }}>
              Loading filters…
            </Typography>
          )}

          {error && (
            <Typography variant="body2" sx={{ color: "error.main" }}>
              {error}
            </Typography>
          )}

          {!loading &&
            !error &&
            groups.map((g) => (
              <FilterSection
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
};

export default BlogFilter;
