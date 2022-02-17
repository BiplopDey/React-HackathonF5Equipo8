import { useParams } from "react-router-dom";
import AdvertiserDetails from "../components/advertiserDetails";
import { advertiserList } from "../data/advertiserData";

export default function AdvertiserView() {
  let { id } = useParams();
  const exp = advertiserList.find((experience) => experience.id == id);
  console.log(exp)
  return (
    <>
      <AdvertiserDetails
        imageSource={exp.img}
        name={exp.name}
        assessments={exp.assessment}
      />
    </>
  );
}
