import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./AddRecipeModal.css"; 

const AddRecipeModal = ({ isOpen, onClose, onAddRecipe, types, cuisines }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [ingredients, setIngredients] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !type || !cuisine) {
            alert("Please fill in all required fields.");
            return;
        }

        const newRecipe = {
            name,
            type,
            cuisine,
            ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
        };

        onAddRecipe(newRecipe);
    };

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Type:
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Select Type</option>
                            {types.map((typeOption) => (
                                <option key={typeOption} value={typeOption}>
                                    {typeOption}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Cuisine:
                        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                            <option value="">Select Cuisine</option>
                            {cuisines.map((cuisineOption) => (
                                <option key={cuisineOption} value={cuisineOption}>
                                    {cuisineOption}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Ingredients (comma separated):
                        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                    </label>
                    <button type="submit">Add Recipe</button>
                    <button type="button" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default AddRecipeModal;
