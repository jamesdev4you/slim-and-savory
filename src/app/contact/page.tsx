import ContactMe from "@/PageComponents/ContactMe/contactme";
import { fetchContactHeader } from "@/sanity/fetchContactHeader";
import { fetchContactPageContent } from "@/sanity/fetchContactPageContent";
import { urlFor } from "@/sanity/fetchContactHeader";

export default async function Page() {
  const header = await fetchContactHeader();
  const contactContent = await fetchContactPageContent();

  const headerData = {
    title: header.title,
    subtitle: header.subtitle,
    backgroundImage: urlFor(header.backgroundImage).url(),
  };

  return <ContactMe headerData={headerData} contactContent={contactContent} />;
}
