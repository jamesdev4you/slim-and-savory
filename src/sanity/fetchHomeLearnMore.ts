import { client } from "./client";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchHomeLearnMore() {
  noStore();

  return await client.fetch(`
    *[_type == "homeLearnMore"][0]{
      subtitle,
      title,
      description,
      image
    }
  `);
}
