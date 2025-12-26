import { client } from "./client";
import { groq } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchAboutHeader() {
  noStore();

  return client.fetch(
    groq`*[_type == "aboutHeader"][0]{
      title,
      description,
      author->{
        name,
        headshot
      }
    }`
  );
}
