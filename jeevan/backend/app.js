const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipe");

const app = express();
app.use(cors());
app.use(express.json());
let recipes = [];
app.use("/recipes", recipeRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const addRecipe = async (recipe) => {
    try {
        const response = await fetch("http://localhost:3001/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        });

        if (!response.ok) {
            throw new Error(`Failed to add recipe: ${response.statusText}`);
        }

        const newRecipe = await response.json();
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    } catch (error) {
        console.error(error);
    }
};


module.exports = { app, recipes };
