import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{ 
    const [btnName,setbtnName]=useState("Login");
    const status = useOnlineStatus();
    return (
        
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_IMG} alt="logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Status: {status?"✔":"🚫"}</li>
                <li><Link className="link-style" to="/">Home</Link></li>
                <li><Link className="link-style" to="/cart">Cart</Link></li>
                <li><Link className="link-style" to="/about">About Us</Link></li>
                <li><Link className="link-style" to="/contact">Contact Us</Link></li>
                <li><Link className="link-style" to="/grocery">Grocery</Link></li>
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