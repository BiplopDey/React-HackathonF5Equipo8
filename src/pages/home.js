import ExperienceCardList from "../components/experienceCardList";
import { experienceList } from "../data/experienceData";

export default function Home() {
  const expList = experienceList;
  return (
    <>
      <h1>Titulo</h1>
      <ExperienceCardList expList={expList} />
    </>
  );
}
