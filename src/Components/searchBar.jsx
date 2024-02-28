import { useContext } from "react";
import { AppSearchContext } from "./AppSearchContext";

const SearchBar = () => {
  const { searchInput, setSearchInput, handleSearch } =
    useContext(AppSearchContext);

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

    return (
      <div className="relative flex h-32 items-center">
        <input
          type="search"
          id="search"
          className="w-80 rounded-l-xl h-10 p-2 text-sm text-black border-l-2 border-t-2 border-b-2 border-black"
          placeholder="Search"
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleSearch}
        />
        <button
          onClick={handleSearch}
          className="border-r-2 border-t-2 border-b-2 border-black rounded-r-xl p-2"
        >
          <img src="src/assets/search-svgrepo-com.svg" alt="" className="h-5" />
        </button>
      </div>
    );
};

export default SearchBar;
