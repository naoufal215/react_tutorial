import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About';
import Recipes from "./Recipes";
import Home from "./Home";
import Nav from "./Nav";


function App() {
    return (
        <div className="container">
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/recipes" element={<Recipes/>}/>
                </Routes>
            </Router>


        </div>
    );
}

export default App;
