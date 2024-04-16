import "./MultiItemCarousel.sass"
import {createContext, useState} from "react";
import Button from "../Button/Button";
import CarouselItemList from "./CarouselItemList/CarouselItemList";
import Arrows from "./Arrows/Arrows";

const testdata = [
    "img1", "img2", "img3", "img4", "img5","img6","img7","img8"
]


export const MultiItemCarouselContext = createContext()
function MultiItemCarousel({direction}) {
    const [currentFirstSlide,setCurrentFirstSlide] = useState(0);
    const [items,setItems] = useState(testdata)
    const showingSlides = 4;

    const changeSlide = (direction = 1) => {

        let firstSlideNumber;
        console.log(currentFirstSlide, direction, items.length)
        if (currentFirstSlide + direction < 0) {
            return;
        } else if (currentFirstSlide + direction + showingSlides>8) {
            return;
        }else{
            firstSlideNumber = (currentFirstSlide + direction);
        }


        setCurrentFirstSlide(firstSlideNumber);
    }

    return (
        <div
            className="multi-carousel"
        >
            <MultiItemCarouselContext.Provider
                value={{
                    items,
                    changeSlide,
                    currentFirstSlide: currentFirstSlide,
                }}>
                <CarouselItemList direction={direction} items={items}/>
                <Arrows direction={direction} isLeftEnd={currentFirstSlide===0} isRightEnd={currentFirstSlide>=items.length-showingSlides}/>
            </MultiItemCarouselContext.Provider>
        </div>
    )
}


export default MultiItemCarousel;