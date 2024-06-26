import { useSlider } from "../../hooks/useSlider";
import { Images, Image } from "../../data/data-slider";

export default function HomeSlider() {
  const currentIndex = useSlider<Image>(Images);

  return (
    <article className="home_slider">
      <div>
        <h2 className="hidden">
          Enter a realm where imagination knows no limits
        </h2>
        <h2>join us for an unforgettable visit</h2>
      </div>
      <div>
        <img src={Images[currentIndex].image} alt="gallery-image" />
      </div>
    </article>
  );
}
