"use client";

import PressHeader from "./pressheader";
import PressVideos from "./pressvideos/pressvideos";

const Press = ({
  videos,
  videoheader,
}: {
  videos: any[];
  videoheader: any[];
}) => {
  return (
    <div>
      <PressHeader videoheader={videoheader} />
      <PressVideos videos={videos} /> {/* pass videos down */}
    </div>
  );
};

export default Press;
