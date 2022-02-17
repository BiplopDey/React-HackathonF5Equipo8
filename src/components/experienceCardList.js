import ExperienceCard from "./experienceCard";
import '../styles/App.css';
import "../styles/components/experienceCard.css";


export default function ExperienceCardList({ expList }) {
  return (
    <section>
      <h2>Experiencias Destacadas</h2>
      <div className="scrolling row flex-nowrap flex-lg-wrap">
      {expList.map((exp) => {
        return (
          <div  className="col-9 col-sm-5 col-lg-3 mb-lg-4" key={exp.id}>
              
            <ExperienceCard
                id={exp.id}
                img={exp.img}
                title={exp.title}
                date={exp.date}
                guideName={exp.guideName}
                description={exp.description}
                category={exp.category}
                price={exp.price}
                location={exp.location}
            />
          </div>
        );
      })}
      </div>
    </section>
  );
}
