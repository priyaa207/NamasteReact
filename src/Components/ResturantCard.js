
import { FOOD_IMG } from "../utils/constants";

const ResturantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,
        name,
    avgRating,
cuisines,
costForTwo,
deliveryTime}=resData?.info;
    return (
        <div className="res-card">
            <img className="food" 
            src={ FOOD_IMG+
          cloudinaryImageId} alt="food"></img>
            <h4>{name}</h4>
            <h4>{avgRating}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime}</h5>
        </div>
    )
}

export default ResturantCard;