import Carousel from "../../UI/Carousel/Carousel";
import ShopCategorySelector from "../../UI/ShopCategorySelector/ShopCategorySelector";

const slides = [
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5'
];

function HomePage(props){
  return (
    <div className="homepage">
      <Carousel slides = {slides}/>
      <ShopCategorySelector/>
    </div>
  )
}
export default HomePage;