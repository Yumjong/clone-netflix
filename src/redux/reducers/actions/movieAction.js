import { getMovieActions } from '../getMovieReducer';
import api from '../api';

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovie() {
  return async (dispatch, getState) => {
    const popularMovieApi = api.get(
      `/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    const topRatedApi = api.get(
      `/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    const upcomingApi = api.get(
      `/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [popularMovies, topRatedMovies, upcomingMovies, loading] =
      await Promise.all([popularMovieApi, topRatedApi, upcomingApi, false]);

    dispatch(
      getMovieActions.getMovie({
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upcomingMovies: upcomingMovies.data,
        loading: loading.data,
      })
    );

    // let url = `
    // https://api.themoviedb.org/3/movie/popular?api_key=46433b0b5a6533d2d68839ad3fca8293&language=en-US&page=1`;
    // let response = await fetch(url);
    // let data = await response.json();
    // dispatch({ type: 'GET_POPULAR_MOVIE', payload: { data } });
    // dispatch(getMovieActions.getPopularMovie({ data }));
  };
}

export const movieAction = { getMovie };
