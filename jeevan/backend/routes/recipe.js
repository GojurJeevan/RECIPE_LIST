const express = require("express");
const router = express.Router();

let recipes = []; 
router.get("/", (req, res) => {
    res.json(recipes);
});

router.post("/", (req, res) => {
    const newRecipe = req.body;
    if (!newRecipe.name || !newRecipe.type || !newRecipe.cuisine || !newRecipe.ingredients || !newRecipe.instructions) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    newRecipe.id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1; 
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

module.exports = router;
