import { LOGO_IMG } from "../utils/constants";

const Header=()=>{ 
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
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;