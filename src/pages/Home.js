import React, { useEffect } from 'react';
import { movieAction } from '../redux/reducers/actions/movieAction';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from 'react-spinners/ClipLoader';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.getMovie);

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);

  // loading이 true면 스피너를 보여주고
  // loading이 false면 데이터를 보여주자

  // true: 데이터 도착 전
  // false: 데이터 도착 후,에러가 났을 때

  if (loading) {
    return (
      <div className="homeLoding">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="home">
      <Banner movie={popularMovies.results[0]} />
      <div className="slide">
        <div className="movieSlide">
          <h1 className="slideTitle">PopularMovie</h1>
          <MovieSlide movies={popularMovies} />
        </div>
        <div className="movieSlide">
          <h1 className="slideTitle">TopRatedMovie</h1>
          <MovieSlide movies={topRatedMovies} />
        </div>
        <div className="movieSlide">
          <h1 className="slideTitle">UpcomingMovie</h1>
          <MovieSlide movies={upcomingMovies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
