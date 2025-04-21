import useRestaurantMenu from "../utils/useRestaurantMenu";
import {MENU_FOOD_IMG} from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResturantMenu =()=>{
    

    const {resId} = useParams();
    
    
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    
    if(resInfo == null) {
        return <Shimmer/>
    }
    const {name, 
        avgRating, 
        costForTwoMessage, 
        cuisines, 
        areaName, 
        slaString} = resInfo?.cards[2]?.card?.card?.info;

   // const {category} = 
   const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) => category?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
   
    const {itemCards} = 
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (
        <div className="mt-24 mx-auto w-3xl pl-4">
            <div className="border-b-8 border-gray-200">
                <div className="flex justify-between">
                    <h3 className="px-4 font-bold text-2xl">{name}</h3>
                    <Link className="text-gray-600 hover:text-blue-800 font-medium inline-block transition duration-200" to="/"> ↞ Back</Link>
                </div>
                
                <div className=" py-1 px-4 mt-3 border-b-1 border-gray-200 shadow-lg rounded-lg">
                    <p>{avgRating} - {costForTwoMessage}</p>
                    <h5>{cuisines.join(", ")}</h5>
                    <h5>{areaName}</h5>
                    <h5>{slaString}</h5> 
                </div>
            </div>
            
             
            {categories.map((category,index)=> <RestaurantCategory key={category?.card?.card.title} 
            data={category?.card?.card} 
            showItems= {index == showIndex ? true :false}
            setShowIndex={()=>setShowIndex(index)}
           
            />)}
            
        </div>
    )
}

export default ResturantMenu;