import "./CatalogWrapper.sass";
import {NavLink, Outlet} from "react-router-dom";
function CatalogWrapper(){
return (
  <div className="catalog-wrapper">
    <nav className="catalog-wrapper__path">
      <NavLink to="/" className="catalog-wrapper__path">Главная</NavLink>
    </nav>
    <Outlet/>
  </div>
  )
}

export default CatalogWrapper;