import { useParams } from 'react-router-dom';
import Product from "../../../models/Product";

const products = [
  new Product(0,"Nike Sportswear синтетическим наполнителем", 50, 100, 50),
  new Product(1,"bebebeb", 10011)
  ]

function ProductPage(props){
  const { key } = useParams();
  const product = products.find((item)=>item.key === parseInt(key));
  return (
    <div>
      {product.name}
    </div>
  )
}

export default ProductPage;