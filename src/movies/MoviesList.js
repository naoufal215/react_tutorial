import React, {useContext} from "react";
import {MoviesContext} from "./MoviesContext";
import Movie from "./Movie";
import AddMovie from "./AddMovie";

const MoviesList = () => {
   const [movies,setMovies] = useContext(MoviesContext);

    return (
        <div className="row">
            <div className="col-md-6">
                {
                    movies.map(movie => (
                            <Movie name={movie.name} price={movie.price} />
                    ))
                }
            </div>
            <div className="col-md-6">
                    <AddMovie />
            </div>
        </div>
    )
}

export default MoviesList;