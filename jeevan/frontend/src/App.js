import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filters, { DropdownOptions } from "./components/Filters";
import RecipeList from "./components/RecipeList";
import AddRecipeModal from "./components/AddRecipeModal";

const App = () => {
    const [filters, setFilters] = useState({
        type: "",
        cuisine: "",
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { types, cuisines } = DropdownOptions;

    // Fetch recipes from the backend
    const fetchRecipes = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:3001/recipes");
            if (!response.ok) {
                throw new Error("Failed to fetch recipes.");
            }

            const data = await response.json();
            setRecipes(data); 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchRecipes();
    }, [filters, searchQuery]);
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

    return (
        <div>
            <Navbar onSearch={setSearchQuery} />
            <div className="spaced">
                <Filters filters={filters} setFilters={setFilters} />
            </div>
            <div style={{ padding: "20px" }}>
                <button onClick={() => setIsModalOpen(true)}>Add Recipe</button>
                <AddRecipeModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAddRecipe={addRecipe}
                    types={types}
                    cuisines={cuisines}
                />
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && recipes.length === 0 && (
                <p>No recipes found. Try adjusting your search or filters.</p>
            )}
            {!loading && !error && recipes.length > 0 && <RecipeList recipes={recipes} />}
        </div>
    );
};

export default App;
