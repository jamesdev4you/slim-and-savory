import { client } from "./client";
import { groq } from "next-sanity";

export async function fetchAboutHeader() {
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
