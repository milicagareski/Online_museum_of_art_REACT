import { aboutData } from "../../../data/about-data";
import SingleItem from "./SingleItem";
import AboutItem from "./about.types";

export default function AboutInfo() {
  return (
    <ul className="about-info">
      {aboutData.map((item: AboutItem) => (
        <SingleItem singleItem={item} />
      ))}
    </ul>
  );
}
