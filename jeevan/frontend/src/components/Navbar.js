import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value); 
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Recipe Search
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <div style={{ position: "relative" }}>
                    <InputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} onChange={handleSearch} value={searchQuery} />
                    <IconButton onClick={() => onSearch(searchQuery)}>
                        <SearchIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
