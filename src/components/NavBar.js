import Home from "../assets/house-fill.svg";
import Menu from "../assets/grid-3x3-gap-fill.svg";
import Location from "../assets/geo-alt-fill.svg";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img  src={Location} alt="Logo"/>
                    </div>
                    <div className="col-4">
                        <img  src={Menu} alt="Logo"/>
                    </div>
                    <div className="col-4">
                        <img  src={Home} alt="Logo"/>
                    </div>

                </div>
            </div>
        </nav>
    );
}
