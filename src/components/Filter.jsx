// src/components/Filter.js
import React from 'react';
import '../css/Filter.css'; // Create this CSS file for styling

const Filter = ({ onFilterChange }) => {
    const handleTitleChange = (e) => {
        onFilterChange({ title: e.target.value, rate: null }); // Clear rate when title changes
    };

    const handleRateChange = (e) => {
        onFilterChange({ title: null, rate: Number(e.target.value) }); // Clear title when rate changes
    };

    return (
        <div className="filter-container">
            <input
                type="text"
                placeholder="Filtrer par title..."
                onChange={handleTitleChange}
                className="filter-input"
            />
            <input
                type="number"
                placeholder="Filtrer par rating (1-5)..."
                min="1"
                max="5"
                onChange={handleRateChange}
                className="filter-input"
            />
        </div>
    );
};

export default Filter;