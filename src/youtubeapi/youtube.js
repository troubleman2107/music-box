import axios from "axios";
const KEY = "AIzaSyBWF3hhu-6SklhocQB-1gDD0nbEx9hCMgE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: KEY
  }
});
