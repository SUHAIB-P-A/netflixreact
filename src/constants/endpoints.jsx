import { API_KEY } from "./constants";

export const trendingMovieEndpoint = `/trending/all/day?api_key=${API_KEY}`;
export const netdlixoriginalposters = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213'`; 
export const actions = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const movievideokey = `https://api.themoviedb.org/3/movie/293613/videos?api_key=${API_KEY}`
export const youtubevideolink = 'https://www.youtube.com/watch?v='