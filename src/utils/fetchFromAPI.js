import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "f75756d68amsh3a59e6682eefb94p185439jsn2751f77d1b72",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
