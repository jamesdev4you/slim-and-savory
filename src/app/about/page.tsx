import AboutMe from "@/PageComponents/AboutMe/aboutme";
import { fetchAboutHeader } from "@/sanity/fetchAboutHeader";
import { fetchAboutDescription } from "@/sanity/fetchAboutDescription";
import { fetchShopItems } from "@/sanity/shop";

export default async function Page() {
  const headerData = await fetchAboutHeader();
  const descriptionData = await fetchAboutDescription();
  const shopItems = await fetchShopItems();

  return (
    <AboutMe
      shopItems={shopItems}
      headerData={headerData}
      descriptionData={descriptionData}
    />
  );
}
