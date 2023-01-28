import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '31909701-b05a4a73718479a7bf524b9e0',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const searchPictures = async search => {
  const { data } = await instance.get('/', {
    params: {
      q: search,
      page: 1,
    },
  });
  return data;
};

// const BASE_URL = 'https://pixabay.com/api';
// const API_KEY = '31909701-b05a4a73718479a7bf524b9e0';

// axios.defaults.baseURL = BASE_URL;

// export const searchPictures = async search => {
//   const { data } = await axios.get('/', {
//     params: {
//       key: API_KEY,
//       q: search,
//       page: 1,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//     },
//   });
//   return data;
// };
