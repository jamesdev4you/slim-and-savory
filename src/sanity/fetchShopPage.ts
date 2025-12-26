import { client } from "./client";
import { unstable_noStore as noStore } from "next/cache";

export const fetchShopPage = async () => {
  noStore();

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
