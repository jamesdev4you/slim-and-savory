import { client } from "./client";
import { groq } from "next-sanity";

export async function fetchVideos() {
  return client.fetch(
    groq`*[_type == "video"] | order(publishedAt desc){
      _id,
      title,
      slug,
      description,
      youtubeUrl,
      thumbnail
    }`
  );
}

export async function fetchSingleVideo(slug: string) {
  return client.fetch(
    groq`*[_type == "video" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      youtubeUrl,
      thumbnail
    }`,
    { slug }
  );
}
