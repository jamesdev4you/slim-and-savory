import Home from "@/PageComponents/Home/home";
import { fetchHomeHeader } from "@/sanity/fetchHomeHeaderData";
import { fetchHomeCookbook } from "@/sanity/fetchHomeCookbook";
import { fetchHomeLearnMore } from "@/sanity/fetchHomeLearnMore";
import { fetchHomePosts } from "@/sanity/fetchHomePosts";

export default async function Page() {
  const headerData = await fetchHomeHeader();
  const cookbookData = await fetchHomeCookbook();
  const learnMoreData = await fetchHomeLearnMore();
  const homePosts = await fetchHomePosts();

  return (
    <main>
      <Home
        headerData={headerData}
        cookbookData={cookbookData}
        learnMoreData={learnMoreData}
        homePosts={homePosts}
      />
    </main>
  );
}
