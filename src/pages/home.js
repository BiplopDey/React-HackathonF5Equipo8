import ExperienceCardList from "../components/experienceCardList";
import { experienceList } from "../data/experienceData";

export default function Home() {
  const expList = experienceList;
  return (
    <>
      <h1>Titulo</h1>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <ExperienceCardList expList={expList} />
    </>
  );
}
