import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import { unstable_noStore as noStore } from "next/cache";

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export async function fetchContactHeader() {
  noStore();

  return await client.fetch(`
    *[_type == "contactHeader"][0]{
      title,
      subtitle,
      backgroundImage
    }
  `);
}
