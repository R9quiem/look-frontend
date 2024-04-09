import "./ProductCard.sass";
import ProductPNG from "../../../assets/test/product.png"
import {ReactComponent as DiscountSVG} from "../../../assets/discount-icon.svg"
import {NavLink} from "react-router-dom";
function ProductCard({product}){
  return (
    <NavLink to={`/catalog/${product.id}`}>
      <div className="product-card">
        {product.price.discount&&<DiscountSVG className="product-card__discount-icon"/>}
        <div className="product-card__image">
          <img src={ProductPNG} alt="product"/>
        </div>
        <section className="product-card__props">
          <div className="product-card__props__price-wrapper">
            <span className="product-card__props__price">{product.price.price}{product.price.unit}</span>
            {product.price.discount&&<span className="product-card__props__original-price">{product.price.priceWithDiscount}{product.price.unit}</span>}
            {product.price.discount&&<span className="product-card__props__discount">{product.price.discount}%</span>}
          </div>
          <div className="product-card__props__name">{product.subtitle}</div>
        </section>
      </div>
    </NavLink>
  )
}

export default ProductCard;