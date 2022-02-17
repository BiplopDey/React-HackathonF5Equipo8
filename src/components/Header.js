import ExperienceCard from "./experienceCard";
import '../styles/App.css';
import "../styles/components/experienceCard.css";
import Logo from "../assets/localExperiences-logo.png";

export default function ExperienceCardList({ expList }) {
    return (
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img  src={Logo} alt="Logo" width="30" height="24"
                             className="d-inline-block align-text-top"/>
                    </a>
                </div>
            </nav>
        </div>
    );
}
