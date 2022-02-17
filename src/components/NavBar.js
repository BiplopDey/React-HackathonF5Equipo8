import Home from "../assets/house-fill.svg";
import Menu from "../assets/grid-3x3-gap-fill.svg";
import Location from "../assets/geo-alt-fill.svg";
import "../styles/components/NavBar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="d-md-none navbar navbar-dark bg-primary">
            <div className="container-fluid row justify-content-around" >
                    <div className="col-4 d-flex justify-content-center">
                        <Link className="navbar-icon" to={`/`}><img  src={Location} alt="Location"/></Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <Link className="navbar-icon" to={`/`}><img  src={Menu} alt="Menu"/></Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <Link className="navbar-icon" to={`/`}><img  src={Home} alt="Home"/></Link>
                    </div>
            </div>
        </nav>
    );
}
