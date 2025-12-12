import { client } from "./client";

export async function fetchHomeHeader() {
  const data = await client.fetch(`
    *[_type == "homeHeader"][0]{
      items[] {
        title,
        link,
        "image": image.asset->url
      }
    }
  `);

  return data;
}
