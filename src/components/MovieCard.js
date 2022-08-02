import React from 'react';
import './MovieCard.scss';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.getMovie);
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate(`/movie/${item.id}`);
  };

  return (
    <div
      onClick={moveToDetail}
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
          <div>{item.adult ? 'R-rated' : 'G-rated'}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
