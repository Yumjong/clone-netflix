import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Navigation = () => {
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();
  const goHomeBtn = () => {
    navigate('/');
  };

  let getKeyWord = (e) => {
    let word = e.target.value;
    setSearchWord(word);
  };

  let searchEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/movies?query=${searchWord}`);
    }
  };

  let searchBtn = () => {
    navigate(`/movies?query=${searchWord}`);
  };

  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              width={80}
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="icon"
              onClick={goHomeBtn}
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className="navItem">
                Home
              </Link>
              <Link to="/movies" className="navItem">
                Movies
              </Link>
            </Nav>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Search"
                className="me-2 searchBox"
                aria-label="Search"
                onChange={(event) => getKeyWord(event)}
                onKeyDown={(e) => searchEnter(e)}
              />
              <Button variant="outline-danger" onClick={searchBtn}>
                Search
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
