import { client } from "./client";

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  category: string | null;
  publishedAt: string | null;
  mainPicture: {
    asset: { _ref: string } | null;
    alt?: string;
  } | null;
};

const POSTS_QUERY = /* groq */ `
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  publishedAt,
  mainPicture{asset, alt}
}
`;

export async function fetchPosts(): Promise<PostListItem[]> {
  return client.fetch<PostListItem[]>(POSTS_QUERY);
}
