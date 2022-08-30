import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About';
import Recipies from "./Recipies";
import Home from "./Home";
import Nav from "./Nav";


function App() {
    return (
        <div>
            <Router>
                <Nav/>
                <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/recipies" element={<Recipies />}/>
                </Routes>
            </Router>


        </div>
    );
}

export default App;
