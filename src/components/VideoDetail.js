import React from "react";

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe title='YouTube Video Player' src={videoSrc} />
      </div>
      <div className='ui segment'>
        <div className='ui header'>{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
