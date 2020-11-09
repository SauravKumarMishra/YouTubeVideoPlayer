import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, onVideoSelect }) {
  const renderedItem = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className='ui relaxed divided list'>{renderedItem}</div>;
}
