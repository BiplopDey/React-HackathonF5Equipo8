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

                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
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
