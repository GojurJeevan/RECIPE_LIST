import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../services/recipeService"; 

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const data = await fetchRecipeById(id);
                setRecipe(data);
            } catch (err) {
                setError("Failed to fetch recipe details.");
            }
            setLoading(false);
        };

        getRecipe();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {recipe ? (
                <div>
                    <h1>{recipe.name}</h1>
                    <p>Type: {recipe.type}</p>
                    <p>Cuisine: {recipe.cuisine}</p>
                    <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                    <p>Instructions: {recipe.instructions}</p>
                </div>
            ) : (
                <p>Recipe not found.</p>
            )}
        </div>
    );
};

export default RecipeDetails;
