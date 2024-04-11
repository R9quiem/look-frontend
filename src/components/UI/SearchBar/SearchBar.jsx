import React, {useRef, useState} from 'react';
import "./SearchBar.sass"
import {ReactComponent as SearchSvg} from "../../../assets/search-icon.svg";
import Backdrop from "../Backdrop/Backdrop";

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
  function open(event){
    setIsActive(true);
  }
  function close() {
    setIsActive(false)
  }
  return (
    <div className={"searchbar " + (isActive ? "searchbar-active" : "")}>
      <Backdrop isActive={isActive} close={close}/>
      <div className="searchbar__inner">
        <input
          type="text"
          className={"searchbar__input " + (isActive ? "searchbar__input-active" : "")}
          placeholder="Поиск"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={open}
        />
        <button className="searchbar__search-button" onClick={handleSearchSubmit}>
          <SearchSvg></SearchSvg>
        </button>
      </div>
      <div className="searchbar__modal" style={{display: isActive ? 'flex' : 'none'}}>
        ffdfddfdfdfdfdfdff
      </div>

    </div>
  );
}

export default SearchBar;