import { client } from "./client";

export async function fetchContactPageContent() {
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
