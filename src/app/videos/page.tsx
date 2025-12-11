import { fetchVideos } from "../../sanity/fetchVideo";
import Press from "@/PageComponents/Press/press";

export default async function VideosPage() {
  const videos = await fetchVideos(); // fetch from Sanity

  return <Press videos={videos} />; // pass into component tree
}
