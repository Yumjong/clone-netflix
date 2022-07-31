import React, { useEffect } from 'react';
import { movieAction } from '../redux/reducers/actions/movieAction';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Banner from '../components/Banner';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.getMovie
  );

  console.log('1', popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);

  return (
    <div className="home">
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Home;
