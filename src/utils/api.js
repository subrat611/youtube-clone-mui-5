import axios from "axios";

const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URI,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function AxiosApi(url) {
  const { data } = await axios.get(`${BASE_URI}/${url}`, options);
  return data;
}
