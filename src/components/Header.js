
import '../styles/App.css';
import "../styles/components/experienceCard.css";
import "../styles/components/Header.css";
import Logo from "../assets/localExperiences-logo.png";
import {Link} from "react-router-dom";

export default function ExperienceCardList({ expList }) {
    return (
        <nav className="header bg-light">
                <div className="brand-container">
                    <Link className="" to={`/`}>
                        <img  src={Logo} alt="Logo" className="d-inline-block align-text-top"/>
                    </Link>
                    {/*<button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>*/}
                </div>
                


        </nav>
    );
}
