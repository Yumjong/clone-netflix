import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { movieDetailAction } from '../redux/reducers/actions/movieDetailAction';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const MovieDetail = useSelector((state) => state.getMovie.MovieDetail);
  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetail());
  }, []);

  console.log('detail', MovieDetail);

  return <div>{MovieDetail && MovieDetail.title}</div>;
};

export default MovieDetail;
