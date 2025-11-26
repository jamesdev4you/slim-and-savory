import { fetchSinglePost } from "@/sanity/posts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("RECEIVED SLUG:", slug);

  const post = await fetchSinglePost(slug);

  if (!post) {
    return <Typography>Post not found</Typography>;
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h2">{post.title}</Typography>
      <Typography variant="body2">{post.category?.title}</Typography>
      <Typography sx={{ mt: 2 }}>{post.description}</Typography>
    </Box>
  );
}
