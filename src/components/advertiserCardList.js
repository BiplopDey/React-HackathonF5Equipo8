import AdvertiserCard from "./experienceCard";
import '../styles/App.css';
import "../styles/components/advertiserCard.css";


export default function AdvertiserCardList({ advList }) {
  return (
      <section>
        <h2>Anunciantes Destacados</h2>
        <div className="scrolling row flex-nowrap">
      {advList.map((exp) => {
        return (
          <div  className="col-9 col-sm-5 col-md-3" key={exp.id}>
            <AdvertiserCard
                id={exp.id}
                img={exp.img}
                title={exp.title}
                fecha={exp.fecha}
                nombreGuia={exp.nombreGuia}
                description={exp.description}
                categoria={exp.categoria}
                precio={exp.precio}
            />
          </div>
        );
      })}
    </div>
      </section>
  );
}
