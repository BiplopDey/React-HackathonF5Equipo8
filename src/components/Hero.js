import ExperienceCard from "./experienceCard";
import '../styles/App.css';
import "../styles/components/experienceCard.css";
import "../styles/components/Header.css";
import Logo from "../assets/localExperiences-logo.png";
import Location from "../assets/geo-alt-fill.svg";
import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <nav className="header bg-light">
            <div className="brand-container">
                <Link className="" to={`/`}>
                    <img  src={Logo} alt="Logo" className="d-inline-block align-text-top"/>
                </Link>
            </div>
            <div className="d-flex justify-content-center">
                <form className="form-inline my-2 my-lg-0">
                    <select name="" id="">
                        <option value="">Elige la localidad</option>
                        <option value="">Asturias</option>
                        <option value="">Barcelona</option>
                        <option value="">Bilbao</option>
                        <option value="">Bogotá</option>
                    </select>
                </form>
            </div>


        </nav>
    );
}
