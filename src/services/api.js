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

export const fetchPicturesQuery = async (search, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: search,
      page: page,
    },
  });
  return data;
};
