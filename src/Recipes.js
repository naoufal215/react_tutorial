import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";


function Recipes() {

    const [RecipesData, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const response = await fetch('http://localhost:3004/recipes');

        const responseData = await response.json();

        setRecipes(responseData);
        console.log("data:");
        console.log(responseData);
    }

    return (
        <div>
            <h1>Recipes page</h1>
            <div className="card-deck mb-3 text-center">
                <div className="card-group">
                {
                    RecipesData.map(data => (
                        <Recipe key={data.recipe.label}
                                label={data.recipe.label}
                                image={data.recipe.image}
                                ingredients={data.recipe.ingredientLines}
                                calories={data.recipe.calories}
                        />
                    ))
                }
            </div>
            </div>
        </div>
    );
}

export default Recipes;