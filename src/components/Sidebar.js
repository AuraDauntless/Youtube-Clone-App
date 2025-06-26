import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SchoolIcon from '@mui/icons-material/School';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DownloadIcon from '@mui/icons-material/Download';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ArticleIcon from '@mui/icons-material/Article';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PodcastsIcon from '@mui/icons-material/Podcasts';

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
  <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: '#aaa' }}>
    Main
  </Typography>
  {['Home', 'Shorts', 'Subscriptions'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index === 0 ? <HomeIcon /> : index === 1 ? <WhatshotIcon /> : <SubscriptionsIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

<Divider />

<List>
  <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: '#aaa' }}>
    Library
  </Typography>
  {['History', 'Playlist', 'Your Videos', 'Your Courses', 'Watch Later', 'Liked Videos', 'Downloads'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index === 0 ? <HistoryIcon />
            : index === 1 ? <PlaylistPlayIcon />
            : index === 2 ? <VideoLibraryIcon />
            : index === 3 ? <SchoolIcon />
            : index === 4 ? <WatchLaterIcon />
            : index === 5 ? <ThumbUpIcon />
            : <DownloadIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

<Divider />

<List>
  <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: '#aaa' }}>
    Explore
  </Typography>
  {['Trending', 'Shopping', 'Music', 'Movies', 'Live', 'Gaming', 'News','Sports','Courses','Fashion & Beauty','Podcasts'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index === 0 ? <WhatshotIcon />
            : index === 1 ? <ShoppingCartIcon />
            : index === 2 ? <MusicNoteIcon />
            : index === 3 ? <MovieIcon />
            : index === 4 ? <LiveTvIcon />
            : index === 5 ? <SportsEsportsIcon />
            : index === 6 ? <ArticleIcon />
            : index === 7 ? <SportsSoccerIcon />
            : index === 8 ? <SchoolIcon />
            : index === 9 ? <CheckroomIcon />
            : <PodcastsIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}