import BlogFilterItem from "./blogFilterList";
import { fetchAllFilterGroups } from "../../../../../sanity/fetchFilterOptions";

export default async function BlogFilter() {
  // Fetch filter groups (categories, time, servings, ingredients)
  const groups = await fetchAllFilterGroups();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {groups.map((group) => (
        <BlogFilterItem
          key={group.type}
          heading={group.heading}
          options={group.options}
        />
      ))}
    </div>
  );
}
