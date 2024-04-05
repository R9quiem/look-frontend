import "./CatalogWrapper.sass";
import {Outlet} from "react-router-dom";
function CatalogWrapper(){
return (
  <div className="catalog-wrapper">
    <nav className="catalog-wrapper__path">
      Главная
    </nav>
    <Outlet/>
  </div>
  )
}

export default CatalogWrapper;