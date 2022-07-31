import { getMovieActions } from '../getMovieReducer';

function getMovieDetail() {
  return async (dispatch, getState) => {
    let url = `
        https://api.themoviedb.org/3/movie/616037?api_key=46433b0b5a6533d2d68839ad3fca8293&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    // dispatch({ type: 'GET_MOVIE_DETAIL', payload: { data } });
    dispatch(getMovieActions.getMovieDetail({ data }));
  };
}

export const movieDetailAction = { getMovieDetail };
