import { aboutData } from "../../data/data-about-info";
import SingleItem from "./SingleItem";
import AboutItem from "../../pages/about/about-types";
export default function AboutInfo() {
  return (
    <ul className="about-info">
      {aboutData.map((item: AboutItem) => (
        <SingleItem key={item.id} singleItem={item} />
      ))}
    </ul>
  );
}
