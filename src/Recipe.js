import React from "react";

import NumberFormat from 'react-number-format';

function Recipe({label, image, ingredients, calories}) {

    return (

        // <div className="card mb-4 box-shadow">
        //     <div className="card-header">
        //         <h4 className="my-0 font-weight-normal"> {label}</h4>
        //     </div>
        //     <div className="card-body">
        //         <h1 className="card-title pricing-card-title">Calories <small
        //             className="text-muted"><NumberFormat displayType="text" value={calories} decimalScale={2}
        //                                                  decimalSeparator=","/></small></h1>
        //         <ul className="list-unstyled mt-3 mb-4">
        //             {ingredients.map(ingredient => (
        //                 <li>{ingredient}</li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{label}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title"><NumberFormat displayType="text" value={calories}
                                                                            decimalScale={2} decimalSeparator=","/></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {ingredients.map(ingredient => (
                        <li>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default Recipe;