import Shop from "@/PageComponents/Shop/shop";
import { fetchShopPage } from "@/sanity/fetchShopPage";
import { fetchShopItems } from "@/sanity/shop";

export default async function Page() {
  const shopPage = await fetchShopPage();
  const items = await fetchShopItems();

  return <Shop shopPage={shopPage} items={items} />;
}
