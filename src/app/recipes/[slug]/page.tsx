import { fetchSinglePost } from "@/sanity/posts";
import BlogSingle from "../../../PageComponents/Blog/blogSingle/blogSingle";
import Typography from "@mui/material/Typography";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSinglePost(slug);

  if (!post) {
    return <Typography>Post not found</Typography>;
  }

  return <BlogSingle post={post} />;
}
