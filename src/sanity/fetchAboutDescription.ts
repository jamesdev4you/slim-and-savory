import { client } from "./client";
import { groq } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchAboutDescription() {
  noStore();

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
