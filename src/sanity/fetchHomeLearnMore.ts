import { client } from "./client";

export async function fetchHomeLearnMore() {
  return await client.fetch(`
    *[_type == "homeLearnMore"][0]{
      subtitle,
      title,
      description,
      image
    }
  `);
}
