import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  MovieDetail: {},
};

// function getMovieReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case 'GET_POPULAR_MOVIE':
//       return { ...state, popularMovieList: payload.data };

//     case 'GET_MOVIE_DETAIL':
//       return { ...state, MovieDetail: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default getMovieReducer;

const getMoviesSlice = createSlice({
  name: 'getmovies',
  initialState,
  reducers: {
    getMovie(state, action) {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upcomingMovies = action.payload.upcomingMovies;
    },
    getMovieDetail(state, action) {
      state.MovieDetail = action.payload.data;
    },
  },
});

export const getMovieActions = getMoviesSlice.actions;
export default getMoviesSlice.reducer;
