import CarouselItem from "../CarouselItem/CarouselItem";
import {useContext} from "react";
import {MultiItemCarouselContext} from "../MultiItemCarousel";
import "./CarouselItemList.sass"
const CarouselItemList = ({direction}) => {
    const {currentFirstSlide,items}=useContext(MultiItemCarouselContext);
    return (
        <div className="carousel-item-list"
             style={{
                 transform: `translateY(-${currentFirstSlide * (100/items.length) * 1.2}%)`,
                 flexDirection: direction==="vertical" ? "column" : "row"
             }}>
            {items.map((item) => (
                <CarouselItem data={item}/>
            ))}
        </div>
    )
}
export default CarouselItemList;