import React, { useState } from 'react';
import './FilterComponent.css'; // Import the CSS file

const FilterComponent = () => {
    const [expanded, setExpanded] = useState({});
    const [filters, setFilters] = useState({
        customizable: false,
        idealFor: 'All',
        occasion: 'All',
        work: 'All',
        fabric: 'All',
        segment: 'All',
        suitableFor: 'All',
        rawMaterials: 'All',
        pattern: 'All',
    });

    const toggleExpand = (key) => {
        setExpanded((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div className="filter-container">
            {/* Customizable Checkbox */}
            <div>
                <input
                    type="checkbox"
                    checked={filters.customizable}
                    onChange={(e) => handleFilterChange('customizable', e.target.checked)}
                />
                <label>Customizable</label>
            </div>

            {/* Filter Sections */}
            {[
                'idealFor',
                'occasion',
                'work',
                'fabric',
                'segment',
                'suitableFor',
                'rawMaterials',
                'pattern',
            ].map((filterKey) => (
                <div key={filterKey} className="filter-section">
                    <div
                        className="filter-header"
                        onClick={() => toggleExpand(filterKey)}
                    >
                        <span>{filterKey.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                        <span>{expanded[filterKey] ? '-' : '+'}</span>
                    </div>
                    {expanded[filterKey] && (
                        <div className="filter-dropdown">
                            <select
                                value={filters[filterKey]}
                                onChange={(e) => handleFilterChange(filterKey, e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Option1">Option 1</option>
                                <option value="Option2">Option 2</option>
                                <option value="Option3">Option 3</option>
                            </select>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FilterComponent;
