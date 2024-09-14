export const searchRecipes = async (searchQuery, filters) => {
    const { type, cuisine } = filters;

    const query = new URLSearchParams({
        searchQuery: searchQuery || "",
        type: type || "",
        cuisine: cuisine || ""
    });

    const response = await fetch(`http://localhost:3001/recipes?${query.toString()}`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch recipes.");
    }
    
    return response.json();
};
