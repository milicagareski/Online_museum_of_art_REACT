import { useSlider } from "./Slider";
import { Images, Image } from "../../../data/data";

export default function HomeSlider() {
  const currentIndex = useSlider<Image>(Images);

  return (
    <article className="home_slider">
      <div>
        <img src={Images[currentIndex].image} alt="gallery-image" />
      </div>
    </article>
  );
}
