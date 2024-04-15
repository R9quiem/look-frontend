import "./Arrows.sass"
import {useContext} from "react";
import {MultiItemCarouselContext} from "../MultiItemCarousel";
const Arrows = ({isLeftEnd,isRightEnd}) => {
    const {changeSlide} = useContext(MultiItemCarouselContext);

    return (
        <div className="arrows">
            <button className={isLeftEnd ? "hide ": "" + "arrows__item left "} onClick={()=>changeSlide(-1)}></button>
            <button className={isRightEnd ? "hide " : "" + "arrows__item right "} onClick={() => changeSlide(1)}></button>
        </div>
    )
}
export default Arrows;