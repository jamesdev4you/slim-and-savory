import { client } from "./client";

export async function fetchHomePosts() {
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
