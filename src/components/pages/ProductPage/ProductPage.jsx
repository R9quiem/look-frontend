import { useParams } from 'react-router-dom';
import Product from "../../../models/Product";
import MultiItemCarousel from "../../UI/MultiItemCarousel/MultiItemCarousel";
import "./ProductPage.sass";
import {useState} from "react";

const products = [
  new Product(0,"Nike Sportswear синтетическим наполнителем", 50, 100, 50),
  new Product(1,"bebebeb", 10011)
]
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
  const product = products.find((item)=>item.key === parseInt(key));
  return (
    <div className="product-page">
      <section className="product-page__info">
        <div className="product-page__info__carousel">
          <MultiItemCarousel items={slides} visibleItems={4} horizontal={false}/>
        </div>
      </section>
    </div>
  )
}

export default ProductPage;