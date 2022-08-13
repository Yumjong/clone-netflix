import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import api from '../redux/reducers/api';
import './Review.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const Review = ({ setReviewBtn }) => {
  const [review, setReview] = useState();
  let { id } = useParams();

  const Review = async () => {
    const reviewApi = api.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    let [reviews] = await Promise.all([reviewApi]);
    setReview(reviews.data.results);
  };

  useEffect(() => {
    Review();
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
        <button className="reviewBtn" onClick={handleReviewBtn}>
          REVIEW
        </button>
        <button className="relatedBtn" onClick={handleRelateBtn}>
          RELATED MOVIES
        </button>
      </Col>
      <div className="review">
        {review?.length !== 0 ? (
          review?.map((item, i) => (
            <div className="reviewBox" key={i}>
              <h3>{item.author}</h3>
              <div>{item.content}</div>
              <div className="reviewDate"> 2022-08-10</div>
              <div className="underBar"></div>
            </div>
          ))
        ) : (
          <h3>There are no reviews....</h3>
        )}
      </div>
    </Row>
  );
};

export default Review;
