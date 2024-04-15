import "./MultiItemCarousel.sass"
import {createContext, useState} from "react";
import Button from "../Button/Button";
import CarouselItemList from "./CarouselItemList/CarouselItemList";
import Arrows from "./Arrows/Arrows";

const testdata = [
    "img1", "img2", "img3", "img4", "img5","img6","img7","img8"
]


export const MultiItemCarouselContext = createContext()
function MultiItemCarousel({}) {
    const [currentFirstSlide,setCurrentFirstSlide] = useState(0);
    const [items,setItems] = useState(testdata)
    const [touchPosition, setTouchPosition] = useState(null)
    const showingSlides = 4;
    const handleTouchStart = (e) => {
        const touchDown = e.clientY;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.clientY;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }
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
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchMove}
        >
            <MultiItemCarouselContext.Provider
                value={{
                    items,
                    changeSlide,
                    currentFirstSlide: currentFirstSlide
                }}>
                <CarouselItemList items={items}/>
                <Arrows isLeftEnd={currentFirstSlide===0} isRightEnd={currentFirstSlide>=items.length-showingSlides}/>
            </MultiItemCarouselContext.Provider>
        </div>
    )
}


export default MultiItemCarousel;