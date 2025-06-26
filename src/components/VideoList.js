import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@mui/material';

export default function VideoList({ videos, onVideoSelect }) {
  const listofvideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />
  ));

  return (
    <Grid container spacing={10}>
      {listofvideos}
    </Grid>         
  );
}