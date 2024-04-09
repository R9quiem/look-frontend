import "./CatalogPage.sass"
import ProductCard from "../../UI/ProductCard/ProductCard";

import data from "../../../assets/test/data.json";
function CatalogPage(props){
  return (
    <div className="catalog">
      <div className="catalog__current-category"><h1>Галоши</h1></div>
      <div className="catalog__main-wrapper">
        <section className="catalog__category-selector"></section>
        <div className="catalog__content">
          <section className="catalog__filters"></section>
          <div className="catalog__product-list">
            {data.items.map((product)=> (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage;