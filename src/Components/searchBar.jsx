import React, { useContext } from 'react';
import { AppSearchContext } from './AppSearchContext';

const SearchBar = () => {
  const { searchInput, setSearchInput, handleSearch } = useContext(AppSearchContext);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        </svg>
      </div>
      <input
        type="search"
        id="search"
        className="block w-full rounded-xl h-10 p-4 text-sm text-black border-2 border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch} className="text-white absolute end-2.5 bottom-0.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 ml-10 py-2">
        <img src="src/assets/search-svgrepo-com.svg" alt="" className="h-5" />
      </button>
    </div>
  );
}

export default SearchBar;
