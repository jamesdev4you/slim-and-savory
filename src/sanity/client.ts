import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "oj1hlz89",
  dataset: "production",
  apiVersion: "2025-10-01",
  useCdn: process.env.NODE_ENV === "production",
});
