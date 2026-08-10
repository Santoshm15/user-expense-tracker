import type { ChangeEvent } from "react";

interface SearchBarProps {
  searchTerm: string;
  selectedCity: string;
  cities: string[];
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCityChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function SearchBar({
  searchTerm,
  selectedCity,
  cities,
  onSearchChange,
  onCityChange,
}: SearchBarProps) {
  return (
    <div className="search-section">
      <div className="search-box">
        <label htmlFor="search">Search by Name</label>

        <input
          id="search"
          type="text"
          placeholder="Enter user name..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>

      <div className="city-filter">
        <label htmlFor="city">Filter by City</label>

        <select id="city" value={selectedCity} onChange={onCityChange}>
          <option value="All">All Cities</option>

          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
