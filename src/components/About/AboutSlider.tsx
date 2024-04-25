import { useState } from "react";
import { Images } from "../../data/data-slider";

export default function AboutSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <article className="img-container">
      <div>
        <h1 id="about-title">{Images[currentIndex].name}</h1>
      </div>
      <div>
        <img src={Images[currentIndex].image} alt="" className="slider-img" />
        <div className="icons">
          <p
            onClick={() => {
              setCurrentIndex((prevState) => {
                return prevState === 0 ? Images.length - 1 : prevState - 1;
              });
            }}
            className="icon"
          >
            <i className="fa-solid fa-caret-left"></i>
          </p>
          <p
            onClick={() => {
              setCurrentIndex((prevState) => {
                return prevState === Images.length - 1 ? 0 : prevState + 1;
              });
            }}
            className="icon"
          >
            <i className="fa-solid fa-caret-right"></i>
          </p>
        </div>
      </div>
      <div className="info-container">
        <p>{Images[currentIndex].info}</p>
      </div>
    </article>
  );
}
