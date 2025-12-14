import { fetchSinglePost, fetchRecentPosts } from "@/sanity/posts";
import BlogSingle from "../../../PageComponents/Blog/blogSingle/blogSingle";
import Typography from "@mui/material/Typography";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSinglePost(slug);
  const recentPosts = await fetchRecentPosts(4);

  const filteredRecent = recentPosts
    .filter((p) => p.slug?.current !== slug)
    .slice(0, 3);

  if (!post) {
    return <Typography>Post not found</Typography>;
  }

  return <BlogSingle post={post} recentPosts={filteredRecent} />;
}
