"use client";

import PressHeader from "./pressheader";
import PressVideos from "./pressvideos/pressvideos";

const Press = ({ videos }: { videos: any[] }) => {
  return (
    <div>
      <PressHeader />
      <PressVideos videos={videos} /> {/* pass videos down */}
    </div>
  );
};

export default Press;
