import "./CatalogPageWrapper.sass";
import {NavLink, Outlet} from "react-router-dom";
function CatalogPageWrapper(){
return (
  <div className="catalog-page-wrapper">
    <nav className="catalog-page-wrapper__path">
      <NavLink to="/" className="catalog-page-wrapper__path">Главная</NavLink>
    </nav>
    <Outlet/>
  </div>
  )
}

export default CatalogPageWrapper;