import Home from "@/PageComponents/Home/home";
import { fetchHomeHeader } from "@/sanity/fetchHomeHeaderData";

export default async function Page() {
  const headerData = await fetchHomeHeader();

  return (
    <main>
      <Home headerData={headerData} />
    </main>
  );
}
