import { client } from "./client";
import { groq } from "next-sanity";

export async function fetchAboutDescription() {
  return client.fetch(
    groq`*[_type == "aboutDescription"][0]{
      paragraphOne,
      paragraphTwo,
      paragraphThree,
      image{
        asset->{
          url
        }
      }
    }`
  );
}
