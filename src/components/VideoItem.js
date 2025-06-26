import React from 'react';
import { Button } from '@mui/material';

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <Button className="video-list-item" onClick={() => onVideoSelect(video)}>
      <img
        className="video-thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt="Video Thumbnail"
      />
      <div className="video-details">
        <h3 className="video-title">{video.snippet.title}</h3>
        <p className="video-channel">{video.snippet.channelTitle}</p>
        <p className="video-metadata">
        </p>
      </div>
    </Button>
  );
}