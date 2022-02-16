import { useEffect, useState } from "react";
import ExperienceCard from "../components/experienceCard";
import ExperienceCardList from "../components/experienceCardList";
import { experienceList } from "../data/experienceData";
import ExperienceService from "../domain/services/ExperienceService";

export default function Home() {
  const expList = experienceList;
  return (
    <>
      <ExperienceCardList expList={expList} />
    </>
  );
}
