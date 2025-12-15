import AboutMe from "@/PageComponents/AboutMe/aboutme";
import { fetchAboutHeader } from "@/sanity/fetchAboutHeader";
import { fetchAboutDescription } from "@/sanity/fetchAboutDescription";

export default async function Page() {
  const headerData = await fetchAboutHeader();
  const descriptionData = await fetchAboutDescription();

  return <AboutMe headerData={headerData} descriptionData={descriptionData} />;
}
