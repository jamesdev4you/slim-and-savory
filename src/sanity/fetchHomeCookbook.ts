import { client } from "./client";
import { unstable_noStore as noStore } from "next/cache";

export const fetchHomeCookbook = async () => {
  noStore();

  return await client.fetch(`
    *[_type == "homeCookbook"][0]{
      title,
      ctaText,
      description,
      image,
      buttonText,
      bookLink
    }
  `);
};
