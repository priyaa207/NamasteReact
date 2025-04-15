import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CANCEL_ICON, RES_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./ResturantCard";




const Body = () =>{
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [listOfFiltered, setlistOfFiltered] = useState([]);
    const [searchText, setsearchText]=useState("");
    const [showClearButton, setshowClearButton] = useState(false);

    const ResturantCardPromoted = withPromotedLabel(ResturantCard);

    useEffect(() => {fetchData()},[]);

    const fetchData = async ()=>{
        const data = await fetch(RES_API);
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
        <div className="flex px-8 mx-4">
            <div className="flex px-4 mx-4 my-2">
                <input type="text" className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition" placeholder="Search Restaurant..." value={searchText} 
                onChange={(e)=>{
                    setsearchText(e.target.value)}}></input>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={() =>{
                    const filteredList=listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setlistOfFiltered(filteredList);
                    setshowClearButton(true);
                }}>Search</button>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-lg shadow-md transition duration-300 ease-in-out" 
            onClick = {() =>{
                const filteredList = listOfRestaurant.filter( res => res.info.avgRating > 4.5);
                setlistOfFiltered(filteredList);
                setshowClearButton(true);

            }}
            > Top Rated Restaurant
            
            </button>
            {showClearButton?<button className="py-2 px-4 bg-gray-500 hover:red-blue-700 text-white font-semibold  rounded-xl shadow-md transition duration-300 ease-in-out" onClick={()=>{
                        setlistOfFiltered(listOfRestaurant);
                        setshowClearButton(false);
                        setsearchText("");
                        }}>
                    Clear
            </button>:null}
            
        </div>
        
        <div className="flex flex-wrap">
            {listOfFiltered.map((restaurant)=>(
                <Link className="link-style" to={"/resturants/"+restaurant.info.id} key={restaurant.info.id}>
                    {restaurant.info.veg? <ResturantCardPromoted resData={restaurant}/>:
                    <ResturantCard  resData={restaurant}/>}
                </Link>
            ))}
        </div>
</div>
    )
}

export default Body;