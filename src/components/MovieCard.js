import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ item }) => {
  return (
    <div
      className="movieCard"
      style={{
        margin: 'auto',
        backgroundImage:
          'url(' +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}` +
          ')',
      }}
    ></div>
  );
};

export default MovieCard;
