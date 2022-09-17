import React, {useContext, useState} from "react";
import {MoviesContext} from "./MoviesContext";

const AddMovie = () => {

    const [movies, setMovies] = useContext(MoviesContext)

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const putName = (e) => {setName(e.target.value)};
    const putPrice = (e) => {setPrice(e.target.value)};

    const addMovie = (e) =>{
            e.preventDefault();
            setMovies(previousMovies => [...previousMovies, {name: name,price: price}])
    }

    return (
        <form onSubmit={addMovie}>
            <div className="form-group" >
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="nameInput" placeholder="Movie name" value={name} onChange={putName} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" id="priceInput" placeholder="Price" value={price} onChange={putPrice} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default AddMovie;