import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchElement, name }) => {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder={`Recherche un ${name}`}
        onChange={(e) => setSearchElement(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
