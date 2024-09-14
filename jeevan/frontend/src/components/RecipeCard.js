import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <Card>
            <CardActionArea component={Link} to={`/recipe/${recipe.id}`}>
                <CardContent>
                    <Typography variant="h5">{recipe.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Type: {recipe.type}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Cuisine: {recipe.cuisine}
                    </Typography>
                    <Typography variant="body1">Ingredients: {recipe.ingredients.join(", ")}</Typography>
                    <Typography variant="body2">Instructions: {recipe.instructions}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RecipeCard;
