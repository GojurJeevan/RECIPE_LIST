import React, { useState } from "react";
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const AddRecipeForm = ({ onAddRecipe, types, cuisines }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState(""); 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !type || !cuisine || !instructions) {
            alert("Please fill in all required fields.");
            return;
        }

        const newRecipe = {
            name,
            type,
            cuisine,
            ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
            instructions, 
        };

        onAddRecipe(newRecipe); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Name" variant="outlined" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)} label="Type">
                    {types.map((typeOption) => (
                        <MenuItem key={typeOption} value={typeOption}>
                            {typeOption}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Cuisine</InputLabel>
                <Select value={cuisine} onChange={(e) => setCuisine(e.target.value)} label="Cuisine">
                    {cuisines.map((cuisineOption) => (
                        <MenuItem key={cuisineOption} value={cuisineOption}>
                            {cuisineOption}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField label="Ingredients (comma separated)" variant="outlined" fullWidth margin="normal" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            <TextField label="Instructions" variant="outlined" fullWidth margin="normal" value={instructions} onChange={(e) => setInstructions(e.target.value)} /> {}
            <Button type="submit" variant="contained" color="primary">
                Add Recipe
            </Button>
        </form>
    );
};

export default AddRecipeForm;
