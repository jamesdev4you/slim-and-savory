import Home from "@/PageComponents/Home/home";
import { fetchHomeHeader } from "@/sanity/fetchHomeHeaderData";
import { fetchHomeCookbook } from "@/sanity/fetchHomeCookbook";

export default async function Page() {
  const headerData = await fetchHomeHeader();
  const cookbookData = await fetchHomeCookbook();

  return (
    <main>
      <Home headerData={headerData} cookbookData={cookbookData} />
    </main>
  );
}
