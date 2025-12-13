import { client } from "./client";

export const fetchShopPage = async () => {
  return client.fetch(`
    *[_type == "shopPage"][0]{
      title,
      subtitle,
      categories[]->{
        title,
        value
      }
    }
  `);
};
