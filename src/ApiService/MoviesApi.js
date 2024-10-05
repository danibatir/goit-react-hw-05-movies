import axios from 'axios';

const API_KEY = '7210feaeccb2a8610e5e4f7ef452501c';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getHomeMovies() {
  const { data } = await axios.get(`/trending/movie/week`, {
    params: { api_key: API_KEY },
  });
  return data.results;
}

export async function getMovieByName(query, page) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
      query,
    },
  });

  return data.results;
}

export async function getMovieDetalis(id) {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data;
}

export async function getMovieCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews
`,
    {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    }
  );
  return data.results;
}
