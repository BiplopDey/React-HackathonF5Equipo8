import { useParams } from "react-router-dom";
import ExperienceDetail from "../components/experienceDetail";
import { experienceList } from "../data/experienceData";
import React from "react";

export default function ExperienceView() {
  let { id } = useParams();
  const exp = experienceList.find((experience) => experience.id == id);

  return (
        <ExperienceDetail
            imageSource={exp.img}
            title={exp.title}
            description={exp.description}
            price={exp.price}
            name={exp.name}
        />
  );
}
