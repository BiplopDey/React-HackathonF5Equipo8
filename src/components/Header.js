import ExperienceCard from "./experienceCard";
import '../styles/App.css';
import "../styles/components/experienceCard.css";
import "../styles/components/Header.css";
import Logo from "../assets/localExperiences-logo.png";


export default function ExperienceCardList({ expList }) {
    return (
        <nav className="header bg-light">
                <div className="brand-container">
                    <a href="#">
                        <img  src={Logo} alt="Logo"
                            className="d-inline-block align-text-top"/>
                    </a>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Selecciona País</option>
                    </select>
                </div>


        </nav>
    );
}
