import { client } from "./client";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchContactPageContent() {
  noStore();

  return await client.fetch(`
    *[_type == "contactPageContent"][0]{
      subtitle,
      title,
      description,
      ctaLabel,
      ctaHref
    }
  `);
}
