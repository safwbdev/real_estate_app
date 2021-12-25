import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      // "x-rapidapi-key": "6c2787b1fcmshf898d8c658a12a2p17a5c2jsn36a3779a27d0",
      "x-rapidapi-key": "da59c33f10mshcdc1c3fc06d43b8p1738c5jsn9b111eeb8665",
    },
  });

  return data;
};
