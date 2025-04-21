import ItemLists from "./ItemLists";
import { useState } from "react";


const RestaurantCategory = ({data,  showItems, setShowIndex})=>{
    
    const handleClick = () => {
        setShowIndex();
        if(showItems) {
           showItems = false;
        }
        else {
            showItems = true;
        }
    };

    return (
        <div className="bg-white-50 shadow-lg p-4 mt-8 border-b-8 border-gray-200">
            <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
                <span>🔻</span>
            </div>
            <div>
             {showItems &&  <ItemLists items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;