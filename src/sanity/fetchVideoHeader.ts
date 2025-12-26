import { client } from "./client";
import { groq } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchVideoHeader() {
  noStore();

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
