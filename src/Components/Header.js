import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{ 
    const [btnName,setbtnName]=useState("Login");
    const status = useOnlineStatus();
    return (
        
    <div className="flex justify-between rounded-lg shadow-lg  shadow-gray-400 mx-2 border-2 border-red-200">
        <div>
            <img className="w-32 rounded-lg" src={LOGO_IMG} alt="logo"></img>
        </div>
        <div className="flex lg">
            <ul className="flex p-4 m-4">
                <li className="px-4">Status: {status?"✔":"🚫"}</li>
                <li className="px-4"><Link className="link-style" to="/">Home</Link></li>
                <li className="px-4"><Link className="link-style" to="/cart">Cart</Link></li>
                <li className="px-4"><Link className="link-style" to="/about">About Us</Link></li>
                <li className="px-4"><Link className="link-style" to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link className="link-style" to="/grocery">Grocery</Link></li>
                <li>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out"
                    onClick={()=>{
                        btnName=="Login"?setbtnName("Logout"):setbtnName("Login");
                    }}>{btnName}</button>
                </li>

            </ul>
        </div>
    </div>
    )
}

export default Header;