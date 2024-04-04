import Carousel from "../../UI/Carousel/Carousel";
import ShopCategorySelector from "../../UI/ShopCategorySelector/ShopCategorySelector";
import {useState} from "react";
import ShopCatalog from "../../UI/ShowCatalog/ShopCatalog";
import "./HomePage.sass"
const slides = [
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5'
];

function HomePage(props){
  const [selectedCategory, setSelectedCategory] = useState('vintage');
  return (
    <div className="homepage">
      <Carousel slides = {slides}/>
      <ShopCategorySelector setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <ShopCatalog selectedCategory={selectedCategory}/>
    </div>
  )
}
export default HomePage;