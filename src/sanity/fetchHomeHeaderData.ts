import { client } from "./client";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchHomeHeader() {
  noStore();

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
