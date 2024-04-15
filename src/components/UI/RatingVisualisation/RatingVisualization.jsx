import "./RatingVisualization.sass"
import {ReactComponent as StarSVG} from "../../../assets/star-icon.svg";
import {useState} from "react";

const RatingVisualization = ({rating,setUserRating}) => {
    const [starPercentage,setStarPercentage] = useState(rating * 24);
    return (
        <div className="rating">
            <div className="rating__bg" style={{width: starPercentage + 'px'}}></div>

            <div className="rating__stars">
                {[...Array(5)].map((_, index) =>
                    <div
                        className="rating__stars__item"
                        key={index}
                        onMouseMove={()=>setStarPercentage((index+1)*24)}
                        onMouseLeave={()=>setStarPercentage(rating*24)}>
                        <button className="rating__stars__item-button" key={index} onClick={() => setUserRating(index+1)}></button>
                        <StarSVG className="rating__stars__item-icon"/>
                    </div>)}
            </div>

        </div>
    );
};
export default RatingVisualization