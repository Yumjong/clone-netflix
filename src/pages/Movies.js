import React, { useState, useEffect } from 'react';
import './Movies.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosArrowDropup } from '@react-icons/all-files/io/IoIosArrowDropup';
import { IoIosArrowDropdown } from '@react-icons/all-files/io/IoIosArrowDropdown';
import MoviesPageCard from '../components/MoviesPageCard';

import { useSearchParams } from 'react-router-dom';
import api from '../redux/reducers/api';

const API_KEY = process.env.REACT_APP_API_KEY;

const Movies = () => {
  let [sort, setSort] = useState(true);
  const [popularMovies, setPopularMovies] = useState(null);
  const [genreList, setGenreList] = useState(null);
  const [query, setQuery] = useSearchParams();
  let firstMovies = null;

  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const getPopularMovies = async () => {
    let searchQuery = query.get('query') || '';

    if (searchQuery !== '') {
      const popularMoviesApi = api.get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
      );

      const genreListApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, genreList] = await Promise.all([
        popularMoviesApi,
        genreListApi,
      ]);

      setPopularMovies(popularMovies.data.results);
      setGenreList(genreList.data);
    } else if (searchQuery === '') {
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

      setPopularMovies(popularMovies.data.results);
      setGenreList(genreList.data);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [page, query]);

  let sortBar = () => {
    setSort(!sort);
  };

  const popularitySort = async (e) => {
    let sortValue = e.target.value;
    const popularMoviesSortApi = api.get(
      `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortValue}&include_adult=true&include_video=false&page=${page}`
    );
    let [popularMovieSort] = await Promise.all([popularMoviesSortApi]);
    setPopularMovies(popularMovieSort.data.results);
  };

  return (
    <div className="movies">
      <Container className="moviesContainer">
        <Row className="moviesRow1">
          <Col sm={4} className="filterLine">
            {sort ? (
              <div className="sortBar" onClick={sortBar}>
                <span>Sort</span>
                <IoIosArrowDropup className="upArrow" />
              </div>
            ) : (
              <div className="sortBarOpen">
                <div className="sortTrue" onClick={sortBar}>
                  <div>Sort</div>
                  <IoIosArrowDropdown className="upArrow" />
                </div>
                <div className="barName">Sort Results By</div>
                <div className="sortDrop">
                  <select
                    className="sortSelect"
                    onChange={(e) => popularitySort(e)}
                  >
                    <option value="popularity.desc" className="selected">
                      Popularity.desc
                    </option>
                    <option value="popularity.asc" className="selected">
                      Popularity.asc
                    </option>
                    <option value="release_date.desc" className="selected">
                      Release Day.desc
                    </option>
                    <option value="release_date.asc" className="selected">
                      Release Day.asc
                    </option>
                    <option value="vote_average.desc" className="selected">
                      Vote.desc
                    </option>
                    <option value="vote_average.asc" className="selected">
                      Vote.asc
                    </option>
                  </select>
                </div>
              </div>
            )}
            {/* <div className="filterBar">
              <span>Filter</span>
              <IoIosArrowDropup className="upArrow" />
            </div> */}
          </Col>
          <Col sm={8} className="moviesCardLine">
            <MoviesPageCard
              popularMovies={popularMovies}
              genreList={genreList}
              page={page}
              setPage={setPage}
              handlePageChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
