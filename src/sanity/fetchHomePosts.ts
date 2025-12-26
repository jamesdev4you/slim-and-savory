import { client } from "./client";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchHomePosts() {
  noStore();

  return await client.fetch(`
    *[_type == "post"]
      | order(publishedAt desc)[-9...-1]{
        _id,
        title,
        slug,
        publishedAt,
        category->{title},
        mainPicture{
          asset->{url},
          alt
        }
      }
  `);
}
