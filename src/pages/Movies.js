import React, { useState } from 'react';
import './Movies.scss';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { IoIosArrowDropup } from '@react-icons/all-files/io/IoIosArrowDropup';
import { IoIosArrowDropdown } from '@react-icons/all-files/io/IoIosArrowDropdown';
import MoviesPageCard from '../components/MoviesPageCard';

const Movies = () => {
  let [sort, setSort] = useState(false);
  let sortBar = () => {
    setSort(!sort);
  };

  return (
    <div className="movies">
      <Container className="moviesContainer">
        <Row className="moviesRow1">
          <Col sm={4} className="filterLine">
            {sort ? (
              <div className="sortBar">
                <span>Sort</span>
                <IoIosArrowDropup className="upArrow" onClick={sortBar} />
              </div>
            ) : (
              <div className="sortBarOpen">
                <div className="sortTrue" onClick={sortBar}>
                  <div>Sort</div>
                  <IoIosArrowDropdown className="upArrow" />
                </div>
                <div className="barName">Sort Results By</div>
                <Dropdown className="sortDrop">
                  <Dropdown.Toggle id="dropdown-basic" variant="danger">
                    popularity.desc
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
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
