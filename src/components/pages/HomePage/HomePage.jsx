import Carousel from "../../UI/Carousel/Carousel";

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
    </div>
  )
}
export default HomePage;