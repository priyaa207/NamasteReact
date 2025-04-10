import useRestaurantMenu from "../utils/useRestaurantMenu";
import {MENU_FOOD_IMG} from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";

const ResturantMenu =()=>{
    
    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);
    if(resInfo == null) {
        return <Shimmer/>
    }
    const {name, 
        avgRating, 
        costForTwoMessage, 
        cuisines, 
        areaName, 
        slaString} = resInfo?.cards[2]?.card?.card?.info;

    
    const {itemCards} = 
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (
        <div className="res-menu-header">
            <div className="res-detail">
                <div className="name-div">
                    <h3>{name}</h3>
                    <Link to="/">Back</Link>
                </div>
                
                <div className="detail-div">
                    <p>{avgRating} - {costForTwoMessage}</p>
                    <h5>{cuisines.join(", ")}</h5>
                    <h5>{areaName}</h5>
                    <h5>{slaString}</h5>
                </div>
            </div>
            <div className="header-line"></div>
            <div className="res-menu">
                <ul>
                    {itemCards.map (item => <li key={item?.card?.info?.id}>
                        <div className="list-item">
                            <div className="menu">
                                <h4>{item?.card?.info?.name} </h4>
                                <h5> Rs. {item?.card?.info?.price /100 || itemCards[0].card.info?.defaultPrice /100}</h5>
                                <p>{item?.card?.info?.description}</p>
                            </div>
                            <div className="food-img">
                                <img className="menu-img" src={MENU_FOOD_IMG + item?.card?.info?.imageId}></img>
                            </div>
                        </div>
                        <div className="line"></div>
                    </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ResturantMenu;