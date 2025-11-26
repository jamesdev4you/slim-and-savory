import BlogPageClient from "./BlogPageClient/BlogPageClient";
import { fetchPosts } from "../../../sanity/posts";
import { fetchAllFilterGroups } from "@/sanity/fetchFilterOptions";

export default async function BlogHeader() {
  const posts = await fetchPosts();
  const groups = await fetchAllFilterGroups();

  return <BlogPageClient posts={posts} groups={groups} />;
}
