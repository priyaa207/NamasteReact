
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
        <div className="w-48 p-4 mx-2 rounded-lg bg-amber-50 hover:bg-amber-100 hover:cursor-pointer">
            <img className="h-32 rounded-2xl px-2 w-full" 
            src={ FOOD_IMG+
          cloudinaryImageId} alt="food"></img>
            <h4 className="pt-2 font-semibold">{name}</h4>
            <h4 className="text-green-500 font-semibold">{avgRating}</h4>
            <h5 className="font-stretch-condensed">{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime}</h5>
        </div>
    );
};

export const withPromotedLabel =(ResturantCard)=>{
    return (props)=>{
        return (    
            <div>
                <label className="absolute bg-green-700 text-white m-2 p-2 rounded-2xl">Veg</label>
                <ResturantCard {...props}/>
            </div>

        );

    }
}

export default ResturantCard;