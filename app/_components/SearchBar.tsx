import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="w-5/12 h-12 px-4 py-2 bg-black rounded-full">
      <input
        type="text"
        className="w-5/6 h-full bg-black text-white rounded-full focus:outline-none"
      />
      <button className="w-1/6 h-full bg-black text-white rounded-full">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
