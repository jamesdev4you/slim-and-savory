import { client } from "./client";

export type FilterOption = { title: string; value: string };
export type FilterGroup = {
  heading: string;
  type: string;
  options: FilterOption[];
};

const FILTER_QUERY = /* groq */ `
*[_type == $type] | order(title asc) {
  title,
  "value": coalesce(slug.current, title)
}
`;

export async function fetchFilterGroup(
  type: "category" | "cookingTime" | "dietary" | "ingredientMajor",
  heading: string
): Promise<FilterGroup> {
  const options = await client.fetch<FilterOption[]>(FILTER_QUERY, { type });
  return { heading, type, options };
}

export async function fetchAllFilterGroups(): Promise<FilterGroup[]> {
  // Map schema type -> UI heading text
  const groups: Array<{ type: FilterGroup["type"]; heading: string }> = [
    { type: "category", heading: "Category" },
    { type: "cookingTime", heading: "Cooking Time" },
    { type: "dietary", heading: "Dietary" },
    { type: "ingredientMajor", heading: "Ingredient(s)" },
  ];
  return Promise.all(
    groups.map((g) => fetchFilterGroup(g.type as any, g.heading))
  );
}
