import { client } from "./client";
import { groq } from "next-sanity";

export async function fetchVideoHeader() {
  return client.fetch(
    groq`*[_type == "videoHero"][0]{
      title,
      subtitle,
      video{
        asset->{
          url
        }
      }
    }`
  );
}
