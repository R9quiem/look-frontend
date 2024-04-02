import React, { useState } from 'react';
import "./SearchBar.sass"
import {ReactComponent as SearchSvg} from "../../../assets/search.svg";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearchSubmit = () => {
    console.log("Заглушка. Выполняется поиск:", searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        className="searchbar"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleSearchChange}
      >

      </input>
      <button className="search-button" onClick={handleSearchSubmit}>
        <img src={SearchSvg} alt="Search"/>
      </button>
    </div>
  );
}

export default SearchBar;