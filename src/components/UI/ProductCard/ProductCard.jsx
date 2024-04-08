import "./ProductCard.sass";
import ProductPNG from "../../../assets/test/product.png"
import {ReactComponent as DiscountSVG} from "../../../assets/discount-icon.svg"
import {NavLink} from "react-router-dom";
function ProductCard({product}){
  return (
    <NavLink to={`/catalog/${product.key}`}>
      <div className="product-card">
        {product.discount&&<DiscountSVG className="product-card__discount-icon"/>}
        <div className="product-card__image">
          <img src={ProductPNG} alt="product"/>
        </div>
        <section className="product-card__props">
          <div className="product-card__props__price-wrapper">
            <span className="product-card__props__price">{product.price}р</span>
            {product.discount&&<span className="product-card__props__original-price">{product.originalPrice}р</span>}
            {product.discount&&<span className="product-card__props__discount">{product.discount}%</span>}
          </div>
          <div className="product-card__props__name">{product.name}</div>
        </section>
      </div>
    </NavLink>
  )
}

export default ProductCard;