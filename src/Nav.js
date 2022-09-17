import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {MoviesContext} from "./movies/MoviesContext";


function Nav(){

    const [movies, setMovies] = useContext(MoviesContext);
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">

                      <li className="nav-item active">
                          <Link className="nav-link" to="/">
                              Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/about">
                              About
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/recipes">
                              Recipies
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/movies">
                              see Movies: {movies.length}
                          </Link>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
  );
}

export default Nav;