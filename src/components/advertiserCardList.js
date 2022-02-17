import AdvertiserCard from "./advertiserCard";
import '../styles/App.css';
import "../styles/components/advertiserCard.css";


export default function AdvertiserCardList({ advList }) {
  return (
      <section>
        <h2>Anunciantes Destacados</h2>
        <div className="scrolling row flex-nowrap">
      {advList.map((exp) => {
        return (
          <div  className="col-9 col-sm-5 col-lg-3" key={exp.id}>
            <AdvertiserCard
                id={exp.id}
                img={exp.img}
                name={exp.name}
                assessment={exp.assessment}
            />
          </div>
        );
      })}
    </div>
      </section>
  );
}
