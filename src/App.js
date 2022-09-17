import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About';
import Recipes from "./Recipes";
import Home from "./Home";
import Nav from "./Nav";
import {MoviesProvider} from "./movies/MoviesContext";
import MoviesList from "./movies/MoviesList";


function App() {
    return (
        <MoviesProvider>
            <div className="container">
                <Router>
                    <Nav/>
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/recipes" element={<Recipes/>}/>
                        <Route path="/movies" element={<MoviesList/>} />
                    </Routes>
                </Router>


            </div>
        </MoviesProvider>
    );
}

export default App;
