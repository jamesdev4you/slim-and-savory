import { client } from "./client";
import { groq } from "next-sanity";

export async function fetchShopItems() {
  return client.fetch(
    groq`*[_type == "shopItem"]{
      _id,
      title,
      category,
      amazonUrl,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      }
    }`
  );
}
