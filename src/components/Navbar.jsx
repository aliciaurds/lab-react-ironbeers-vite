import { Link } from "react-router-dom";
import navIcon from "../assets/home-icon.png"

function Navbar() {

    return(
       <nav className="nav-bar">
        <Link to={"/"} >
            <button className="nav-btn">
                <img src={navIcon} alt="homeIcon" />
            </button>
        </Link>
       </nav> 
    )
}

export default Navbar;
