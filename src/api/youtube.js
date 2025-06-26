import axios from 'axios';

const KEY = 'AIzaSyDnSh6kvDlKo7WxRz8seKgMMCooZL5LBkU'; 

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

