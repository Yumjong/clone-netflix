import React from 'react';
import './MovieCard.scss';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.getMovie);

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
    >
      <div className="overlay">
        <h3 className="cardTitle">{item.title}</h3>
        <div>
          {item.genre_ids.map((id, i) => (
            <Badge className="genre" bg="danger" key={i}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <div>{item.adult ? '청불' : 'under 18'}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
