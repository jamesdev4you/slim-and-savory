import { fetchVideos } from "../../sanity/fetchVideo";
import { fetchVideoHeader } from "../../sanity/fetchVideoHeader";
import Press from "@/PageComponents/Press/press";

export default async function VideosPage() {
  const videos = await fetchVideos(); // fetch from Sanity
  const videoheader = await fetchVideoHeader();

  return <Press videos={videos} videoheader={videoheader} />; // pass into component tree
}
