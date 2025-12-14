import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export async function fetchContactHeader() {
  return await client.fetch(`
    *[_type == "contactHeader"][0]{
      title,
      subtitle,
      backgroundImage
    }
  `);
}
