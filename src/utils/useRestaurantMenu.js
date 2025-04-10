import { RES_INFO } from "./constants";
import { useState, useEffect } from "react";


const useRestaurantMenu =(resId)=>{
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{fetchData()},[]);

    const fetchData = async ()=>{
        const data = await fetch(RES_INFO + resId);
        const json = await data?.json();
        setresInfo(json?.data);
        
    };
    return resInfo;
}
export default useRestaurantMenu;