import ExperienceCard from "./experienceCard";

export default function ExperienceCardList({ expList }) {
  return (
    <ul>
      {expList.map((exp) => {
        return (
          <li key={exp.id}>
            <ExperienceCard
              id={exp.id}
              guide={exp.guide}
              description={exp.description}
            />
          </li>
        );
      })}
    </ul>
  );
}
