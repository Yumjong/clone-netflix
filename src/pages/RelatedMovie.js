import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import api from '../redux/reducers/api';
import './RelatedMovie.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const RelatedMovie = ({ setReviewBtn }) => {
  const { genreList } = useSelector((state) => state.getMovie);
  const navigate = useNavigate();

  const [related, setRelate] = useState();
  let { id } = useParams();

  const getRelated = async () => {
    const relatedApi = api.get(
      `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    );
    let [related] = await Promise.all([relatedApi]);
    setRelate(related.data.results);
  };

  useEffect(() => {
    getRelated();
  }, []);

  const handleReviewBtn = () => {
    setReviewBtn(true);
  };

  const handleRelateBtn = () => {
    setReviewBtn(false);
  };
  return (
    <Row>
      <Col>
        <button className="reviewBtn2" onClick={handleReviewBtn}>
          REVIEW
        </button>
        <button className="relatedBtn2" onClick={handleRelateBtn}>
          RELATED MOVIES
        </button>
      </Col>
      <Row className="RelatedMovie">
        {related?.map((item, i) => (
          <Col className="relateBox" lg={6} key={i}>
            <div
              onClick={(e) => {
                navigate(`/movie/${item.id}`);
                window.location.reload();
              }}
              className="relatedImg"
              style={{
                backgroundImage:
                  'url(' +
                  `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
                  ')',
              }}
            >
              <div className="relatedOverlay">
                <h3>{item.title}</h3>
                <div>
                  {item.genre_ids.map((id, i) => (
                    <Badge bg="danger" key={i} className="relatedGenre">
                      {genreList &&
                        genreList.find((item) => item.id === id)?.name}
                    </Badge>
                  ))}
                </div>
                <div>
                  <span>{item.vote_average}</span>
                  <div>{item.adult ? 'R-rated' : 'G-rated'}</div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default RelatedMovie;
