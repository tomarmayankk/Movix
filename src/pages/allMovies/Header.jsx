import React from "react";

const Header = ({ onSort, onPopularSort }) => {
  return (
    <div className="flex justify-center py-4 shadow-md">
      <button 
        onClick={onSort} 
        className="mx-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Top Rated Movies
      </button>
      <button 
        onClick={onPopularSort} 
        className="mx-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        Popular Movies
      </button>
    </div>
  );
};

export default Header;
