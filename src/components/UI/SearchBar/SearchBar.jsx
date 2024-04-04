import React, { useState } from 'react';
import "./SearchBar.sass"
import {ReactComponent as SearchSvg} from "../../../assets/search-icon.svg";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive,setIsActive] = useState(false);
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearchSubmit = () => {
    console.log("Заглушка. Выполняется поиск:", searchTerm);
  };
  function toggleIsActive(event){
    console.log(event);
    setIsActive(!isActive)
  }
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={toggleIsActive}
        onBlur={toggleIsActive}
      />
      <button className="searchbar__search-button" onClick={handleSearchSubmit}>
        <SearchSvg></SearchSvg>
      </button>

    </div>
  );
}

export default SearchBar;