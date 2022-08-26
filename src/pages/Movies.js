import React from 'react';
import './Movies.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosArrowDropup } from '@react-icons/all-files/io/IoIosArrowDropup';
import MoviesPageCard from '../components/MoviesPageCard';

const Movies = () => {
  return (
    <div className="movies">
      <Container className="moviesContainer">
        <Row className="moviesRow1">
          <Col sm={4} className="filterLine">
            <div className="sortBar">
              <span>Sort</span>
              <IoIosArrowDropup className="upArrow" />
            </div>
            <div className="filterBar">
              <span>Filter</span>
              <IoIosArrowDropup className="upArrow" />
            </div>
          </Col>
          <Col sm={8} className="moviesCardLine">
            <MoviesPageCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
