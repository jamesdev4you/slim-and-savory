import { client } from "./client";
import { groq } from "next-sanity";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchShopItems() {
  noStore();

  return client.fetch(
    groq`*[_type == "shopItem"]{
      _id,
      title,
      amazonUrl,
      image{
        asset->{
          url
        }
      },
      category->{
        title,
        value
      }
    }`
  );
}
