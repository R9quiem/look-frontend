import { useParams } from 'react-router-dom';
import MultiItemCarousel from "../../UI/MultiItemCarousel/MultiItemCarousel";
import "./ProductPage.sass";
import data from "../../../assets/test/data.json";
import ProductPNG from "../../../assets/test/product.png"
import Button from "../../UI/Button/Button";
import RatingVisualization from "../../UI/RatingVisualisation/RatingVisualization";
import {useState} from "react";
import Characteristics from "../../UI/Characteristics/Characteristics";
import ProductDetails from "../../UI/ProductDetails/ProductDetails";
import ShopInfo from "../../UI/ShopInfo/ShopInfo";
const slides = [
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5',
  'Slide 5',
];

function ProductPage(props){
  const { key } = useParams();
  const product = data.items.find((item)=>item.id === (key));
  //тестовое
  const [userRating, setUserRating] = useState(undefined);
  const [activeTab, setActiveTab] = useState("characteristics");

  return (
    <div className="product-page">
      <div className="product-page__overview">
        <div className="product-page__wrapper">
          <div className="product-page__images">
            <MultiItemCarousel items={slides} visibleItems={4} horizontal={false} direction="vertical"/>
            <img className="product-page__img" src={ProductPNG} alt={product.title}/>
          </div>
          <ProductDetails product={product} activeTab={activeTab} setActiveTab={setActiveTab}/>
          <ShopInfo/>
        </div>
        <div className="product-page__side-blocks-wrapper">
          <div className="product-page__main-info">
            <h1>{product.subtitle}</h1>
            <div className="product-page__main-info__rating">
              <RatingVisualization
                  setUserRating={setUserRating}
                  rating={product.feedback.rating}/>{product.feedback.rating}
              <span>user rating: {userRating && userRating}</span>
            </div>
            <div>цвет:</div>
            <div>выбор типа товара</div>
            <div>Размеры RUS/INT: <span style={{float: "right"}} className="interactive">Таблица размеров</span></div>
            <div className="product-page__main-info__sizes">

            </div>
          </div>
          <div className="product-page__price-block">
            <div className="product-page__price-block__wrapper">
              <span>{product.price.price}{product.price.unit}</span>
              <div className="product-page__price-block__buttons">
                <Button color="black" size="medium">В корзину</Button>
                <Button>1</Button>
                <Button color="lime" size="medium">Купить сейчас</Button>
              </div>
            </div>
            <div className="product-page__price-block__delivery">Доставка в<span className="interactive">&nbsp;Санкт-Петербург</span></div>
          </div>
        </div>

      </div>
      <div>
      </div>
    </div>
  )
}


export default ProductPage;