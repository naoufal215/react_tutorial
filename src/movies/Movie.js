import React from "react";

const Movie = ({name, price}) =>{

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price} $</p>
            </div>
        </div>
    )
}

export default Movie;