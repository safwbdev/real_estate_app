// import axios from "axios";

// const baseUrl = "https://bayut.p.rapidapi.com";

// export const fetchApi = async (url) => {
//   const { data } = await axios.get(url, {
//     headers: {
//       "x-rapidapi-host": "bayut.p.rapidapi.com",
//       "x-rapidapi-key": "6c2787b1fcmshf898d8c658a12a2p17a5c2jsn36a3779a27d0",
//     },
//   });
//   return data;
// };

import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "6c2787b1fcmshf898d8c658a12a2p17a5c2jsn36a3779a27d0",
    },
  });

  return data;
};
