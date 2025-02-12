/* eslint-disable react/prop-types */

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mt-5 flex items-center border border-gray-400 bg-white shadow-md rounded-lg p-2 w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search courses..."
        className="w-full p-2 border-none outline-none rounded-lg text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
