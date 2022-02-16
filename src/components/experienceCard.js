import "./experienceCard.css";
export default function ExperienceCard({ id, guide, description }) {
  return (
    <div>
      <h2 className="hola">
        id: {id}, Guide Name: {guide}
      </h2>
      <h3>{description}</h3>
    </div>
  );
}
