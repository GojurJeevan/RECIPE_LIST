import React from "react";

const types = ["Breakfast", "Lunch", "Dinner"];
const cuisines = ["American", "Italian", "Mexican", "Indian"];

export const DropdownOptions = {
    types,
    cuisines,
};

const Filters = ({ filters, setFilters }) => {
    return (
        <div>
            <label>
                Type:
                <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
                    <option value="">All Types</option>
                    {types.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Cuisine:
                <select value={filters.cuisine} onChange={(e) => setFilters({ ...filters, cuisine: e.target.value })}>
                    <option value="">All Cuisines</option>
                    {cuisines.map((cuisine) => (
                        <option key={cuisine} value={cuisine}>
                            {cuisine}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Filters;
