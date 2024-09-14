import React from "react";
import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes = [] }) => {
    if (recipes.length === 0) {
        return <h2>No recipes found</h2>;
    }

    return (
        <Grid container spacing={3}>
            {recipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipeList;
