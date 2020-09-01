import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3/movie/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTgwNDY0MzU0Y2U0NzI4NzQ3ZWFkYTcwYWM2MTU3OCIsInN1YiI6IjVmNDk3YTUyNWVkOTYyMDAzNzk5NmFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WwTgrzlQn849f2S_XKc4LOPIzozeKR9vfLkvidRqO6k`
  },
  params: {
    language: 'pt-BR'
  }
});

export default api;
