import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";
import { useState } from "react";




const Body = () =>{
    const [listOfRestaurant,setlistOfRestaurant] = useState(resList);
    return (
    <div className="body">
        <div className="filter">
        <button className="filter-btn" 
        onClick = {() =>{
            const filteredList = resList.filter( res => res.data.avgRating > 4);
            setlistOfRestaurant(filteredList);
        }}
        > Top Rated Restaurant</button>
        </div>
        <div className="restaurant">
            {listOfRestaurant.map((restaurant)=>(<ResturantCard key={restaurant.data.id} resData={restaurant}/>))}
        
        </div>
</div>
    )
}

export default Body;