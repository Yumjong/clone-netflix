import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './RelatedMovie.scss';

const RelatedMovie = ({ setReviewBtn }) => {
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
      RelatedMovie
    </Row>
  );
};

export default RelatedMovie;
