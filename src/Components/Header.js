import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";

const Header=()=>{ 
    const [btnName,setbtnName]=useState("Login");
    return (
        
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_IMG} alt="logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About Us</li>
                <li>
                    <button className="login-btn"
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