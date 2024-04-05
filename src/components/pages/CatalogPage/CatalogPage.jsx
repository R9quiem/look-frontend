import "./CatalogPage.sass"
import {useParams} from "react-router-dom";
import ProductCard from "../../UI/ProductCard/ProductCard";
import Product from "../../../models/Product";

function CatalogPage(props){
  const product = new Product("Nike Sportswear синтетическим наполнителем", 50, 100, 50);
  return (
    <div className="catalog">
      <nav className="catalog__path">
        Главная
      </nav>
      <div className="catalog__current-category"><h1>Галоши</h1></div>
      <div className="catalog__main-wrapper">
        <section className="catalog__category-selector"></section>
        <div className="catalog__content">
          <section className="catalog__filters"></section>
          <div className="catalog__product-list">
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage;