import { useParams } from 'react-router-dom';
import MultiItemCarousel from "../../UI/MultiItemCarousel/MultiItemCarousel";
import "./ProductPage.sass";
import data from "../../../assets/test/data.json";
import "../../../assets/test/data.json";

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

  return (
    <div className="product-page">
      <section className="product-page__info">
        <div className="product-page__info__carousel">
          <MultiItemCarousel items={slides} visibleItems={4} horizontal={false}/>
        </div>
      </section>
      {product.subtitle}
    </div>
  )
}

export default ProductPage;