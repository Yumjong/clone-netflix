import { configureStore } from '@reduxjs/toolkit';
import getMovieReducer from './reducers/getMovieReducer';

// let store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    getMovie: getMovieReducer,
  },
});

export default store;
