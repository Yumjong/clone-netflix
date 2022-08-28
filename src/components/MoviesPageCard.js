import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { movieAction } from '../redux/reducers/actions/movieAction';
import { useNavigate } from 'react-router';

import MoviesPagination from './MoviesPagination';

import api from '../redux/reducers/api';

import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { IoIosPeople } from '@react-icons/all-files/io/IoIosPeople';
import { BsFillPersonCheckFill } from '@react-icons/all-files/bs/BsFillPersonCheckFill';

import './MoviesPageCard.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const MoviesPageCard = () => {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState(null);
  const [genreList, setGenreList] = useState(null);

  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    console.log('page?', page);
    setPage(page);
  };

  const getPopularMovies = async () => {
    const popularMoviesApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`
    );

    const genreListApi = api.get(
      `/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );

    let [popularMovies, genreList] = await Promise.all([
      popularMoviesApi,
      genreListApi,
    ]);

    setPopularMovies(popularMovies.data);
    setGenreList(genreList.data);
  };

  useEffect(() => {
    getPopularMovies();
  }, [page]);

  console.log('popularMovies', popularMovies, genreList);
  return (
    <Row>
      {popularMovies &&
        popularMovies.results?.map((item, i) => (
          <Col
            sm={6}
            className="cardCol1"
            key={i}
            onClick={() => {
              navigate(`/movie/${item.id}`);
            }}
          >
            <Card className="bg-dark text-white moviesCard">
              <Card.Img
                className="cardImage"
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                alt="Card image"
              />
              <Card.ImgOverlay className="innerOverlay">
                <div className="innerTitle">
                  <img
                    alt="InnerCardImage"
                    className="cardInnerPoster"
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                  />
                  <Card.Title className="moviesTitle">{item.title}</Card.Title>
                </div>
                <div className="innerReleaseDate">{item.release_date}</div>
                <div className="innerGenre">
                  {item.genre_ids.map((id, i) => (
                    <Badge className="genre" bg="danger" key={i}>
                      {genreList.genres.find((a) => a.id === id).name}
                    </Badge>
                  ))}
                </div>
                <Card.Text className="innerOverview">{item.overview}</Card.Text>
                <div className="innerAddInfo">
                  <div className="innerIcon">
                    <AiFillStar className="starIcon" />
                    <span>{item.vote_average}</span>
                  </div>
                  <div className="innerIcon">
                    <IoIosPeople className="peopleIcon" />
                    <span>{item.popularity}</span>
                  </div>
                  <div className="innerIcon">
                    <BsFillPersonCheckFill className="adultIcon" />
                    <span>{item.adult ? 'R-rated' : 'G-rated'}</span>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      <MoviesPagination
        page={page}
        setPage={setPage}
        handlePageChange={handlePageChange}
      />
    </Row>
  );
};

export default MoviesPageCard;
