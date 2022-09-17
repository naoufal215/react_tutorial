import React, {createContext, useState} from "react";

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name:"Star wars 1",
            price:10
        },
        {
            name:"World war Z",
            price:25
        },
        {
            name:"Hunger games",
            price:45
        },
        {
            name:"Beautiful mind",
            price:60
        }
    ]);

    return (
        <MoviesContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MoviesContext.Provider>
    )
}

