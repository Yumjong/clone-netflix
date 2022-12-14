import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 464 },
    items: 1,
  },
};

const MovieSlide = ({ movies }) => {
  console.log('moviesSlide', movies);
  return (
    <Carousel responsive={responsive} focusOnSelect={false}>
      {movies.results.map((item, i) => (
        <MovieCard item={item} key={i} />
      ))}
    </Carousel>
  );
};

export default MovieSlide;
