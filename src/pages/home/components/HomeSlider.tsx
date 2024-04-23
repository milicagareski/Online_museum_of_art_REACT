import { useSlider } from "./Slider";
import { Images, Image } from "../../../data/data";

export default function HomeSlider() {
  const currentIndex = useSlider<Image>(Images);

  return (
    <article className="home_slider">
      <div>
        <h2 id="hidden">Enter a realm where imagination knows no limits</h2>
        <h2>join us for an unforgettable visit</h2>
      </div>
      <div>
        <img src={Images[currentIndex].image} alt="gallery-image" />
      </div>
    </article>
  );
}
