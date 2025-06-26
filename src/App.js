import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import SideBar from './components/Sidebar';
import youtube from './api/youtube';
import './style.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: { q: term },
      });

      const items = response.data.items;
      setVideos(items);
      if (items.length > 0) {
        setSelectedVideo(items[0]);
      }
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    handleSearch('React tutorial');
  }, []);

  return (
    <div className="container">
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid size={2}>
          <SideBar></SideBar>
        </Grid>
        <Grid size={8}>
          <SearchBar onFormSubmit={handleSearch} />
        </Grid>

        <Grid size={8}>
          <VideoDetail video={selectedVideo} />
        </Grid>

        <Grid size={4}>
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;