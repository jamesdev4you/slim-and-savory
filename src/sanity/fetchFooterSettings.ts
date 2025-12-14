import { client } from "./client";

export async function fetchFooterSettings() {
  return client.fetch(`
    *[_type == "footerSettings"][0]{
      contactEmail,
      socialLinks
    }
  `);
}
