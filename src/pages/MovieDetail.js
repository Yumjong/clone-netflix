import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
import api from '../redux/reducers/api';
import './MovieDetail.scss';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { IoIosPeople } from '@react-icons/all-files/io/IoIosPeople';
import { BsFillPersonCheckFill } from '@react-icons/all-files/bs/BsFillPersonCheckFill';

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  let { id } = useParams();

  const getMovieDetail = async () => {
    const detailMovieApi = api.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    let [detailMovie] = await Promise.all([detailMovieApi]);
    setMovie(detailMovie.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  console.log('detail', movie);

  return (
    <div className="movieDetail">
      <Container className="detailContainer">
        <Row className="detailRow">
          <Col className="detailCol1">
            <img
              src={` https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
            />
          </Col>
          <Col className="detailCol2">
            <div className="detailTitle">{movie?.title}</div>
            <div className="detailTag">{movie?.tagline}</div>
            <div className="detailGenres">
              {movie?.genres.map((item, i) => (
                <Badge className="detailBadge" bg="danger" key={i}>
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="moreInfo">
              <div className="infoBox">
                <AiFillStar className="starIcon" />
                <div>{movie?.vote_average}</div>
              </div>
              <div className="infoBox">
                <IoIosPeople className="peopleIcon" />
                <div>{movie?.popularity}</div>
              </div>
              <div className="infoBox">
                <BsFillPersonCheckFill className="adultIcon" />
                <div>{movie?.adult ? 'R-rated' : 'G-rated'}</div>
              </div>
            </div>
            <div className="underBar"></div>
            <div className="overview">{movie?.overview}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
