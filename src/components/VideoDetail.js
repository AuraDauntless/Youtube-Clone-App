import React from 'react';


function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="video-player">
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video Player"
        />
      </div>
      <div>
        <h2 className="video-title">{video.snippet.title}</h2>
        <p className="video-channel">{video.snippet.channelTitle}</p>
        <p className="video-metadata" style={{ whiteSpace: 'pre-wrap' }}>
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;