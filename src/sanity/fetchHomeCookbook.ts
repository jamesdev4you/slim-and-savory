import { client } from "./client";

export const fetchHomeCookbook = async () => {
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
