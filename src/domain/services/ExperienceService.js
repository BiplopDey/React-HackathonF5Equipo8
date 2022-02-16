import { experienceList } from "../../data/experienceData";
import Experience from "../models/Experience";

export default function ExperienceService() {
  this.getAll = async function () {
    const data = await experienceList;

    return data;
  };
}
