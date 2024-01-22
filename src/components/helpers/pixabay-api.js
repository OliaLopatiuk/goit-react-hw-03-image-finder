const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41313462-a1bd1fc2b4382ed7475f290bb';
const options = 'image_type=photo&orientation=horizontal&safesearch=true';
let page = 1;
let searchQuery = '';

export const PixabayAPIService = query => {
  if (searchQuery === query) {
    page += 1;
  } else {
    page = 1;
  }

  searchQuery = query;
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&${options}&page=${page}&per_page=12`
  );
};
