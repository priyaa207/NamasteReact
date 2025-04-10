import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CANCEL_ICON } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = () =>{
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [listOfFiltered, setlistOfFiltered] = useState([]);
    const [searchText, setsearchText]=useState("");
    const [showClearButton, setshowClearButton] = useState(false);

    useEffect(() => {fetchData()},[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=restaurant_grid_listing_v2");
        const json = await data?.json();
        
        setlistOfRestaurant(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfFiltered(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    const onlineStatus=useOnlineStatus();
    if(onlineStatus == false) {
         return (<h1 className="offline">Looks like you are offline!! Please check your internet connection.</h1>)
    }
    
    return listOfFiltered.length == 0 ? (<Shimmer/>) :(
        
    <div className="body">
        <div className="filter">
            <div className="search-text">
                <input type="text" className="search" placeholder="Search Restaurant..." value={searchText} 
                onChange={(e)=>{
                    setsearchText(e.target.value)}}></input>
                <button className="filter-btn" onClick={() =>{
                    const filteredList=listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setlistOfFiltered(filteredList);
                    setshowClearButton(true);
                }}>Search</button>
            </div>

            <button className="filter-btn" 
            onClick = {() =>{
                const filteredList = listOfRestaurant.filter( res => res.info.avgRating > 4.5);
                setlistOfFiltered(filteredList);
                setshowClearButton(true);

            }}
            > Top Rated Restaurant
            
            </button>
            {showClearButton?<button className="cancel-filter" onClick={()=>{
                        setlistOfFiltered(listOfRestaurant);
                        setshowClearButton(false);
                        setsearchText("");
                        }}>
                    Clear
            </button>:null}
            
        </div>
        
        <div className="restaurant">
            {listOfFiltered.map((restaurant)=>(
                <Link className="link-style" to={"/resturants/"+restaurant.info.id} key={restaurant.info.id}>
                    <ResturantCard  resData={restaurant}/>
                </Link>
            ))}
        </div>
</div>
    )
}

export default Body;