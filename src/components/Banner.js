import React from 'react';
import './Banner.scss';

const Banner = ({ movie }) => {
  console.log('banner', movie);
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          'url(' +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` +
          ')',
      }}
    >
      <div className="bannerInfo">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
