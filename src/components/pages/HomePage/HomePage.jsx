import BannerCarousel from "../../UI/BannerCarousel/BannerCarousel";
import ShopCategorySelector from "../../UI/ShopCategorySelector/ShopCategorySelector";
import {useState} from "react";
import ShopCatalog from "../../UI/ShopCatalog/ShopCatalog";
import "./HomePage.sass"
const slides = [
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5'
];

function HomePage(props){
  const [selectedCategory, setSelectedCategory] = useState('second-hand');
  return (
    <div className="homepage">
      <BannerCarousel slides = {slides}/>
      <ShopCategorySelector setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <ShopCatalog selectedCategory={selectedCategory}/>
    </div>
  )
}
export default HomePage;