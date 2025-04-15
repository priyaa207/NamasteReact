import { MENU_FOOD_IMG } from "../utils/constants";
const ItemLists=({items})=>{
    return (
        <div className="p-2 m-2">
            <ul>
                {items.map (item => <li key={item?.card?.info?.id}>
                <div className="py-2 my-2 border-b-1 border-orange-300 flex justify-between">
                    <div className="w-9/12">
                    <h4 className="font-semibold">{item?.card?.info?.name} </h4>
                    <h6 className="text-s"> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice /100}</h6>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-2/12">
                    <button className="absolute my-16 ml-6 px-4 text-lg text-green-800 bg-white rounded-lg shadow-md ">Add+</button>
                        <img className="w-full h-24 rounded-lg" src={MENU_FOOD_IMG + item?.card?.info?.imageId}></img>
                        
                    </div>
                </div>
                </li>)
                }
            </ul>
        </div> 
    );
};
export default ItemLists;