import { client } from "./client";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchFooterSettings() {
  noStore();

  return client.fetch(`
    *[_type == "footerSettings"][0]{
      contactEmail,
      socialLinks
    }
  `);
}
