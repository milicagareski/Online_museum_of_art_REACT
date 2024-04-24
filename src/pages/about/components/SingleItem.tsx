import { useState } from "react";
import AboutItem from "./about.types";

interface SingleItemProps {
  singleItem: AboutItem;
}

export default function SingleItem({ singleItem }: SingleItemProps) {
  const { id, title, info, image } = singleItem;
  const [showText, setShowText] = useState(false);

  const toggleTextVisibility = () => {
    setShowText(!showText);
  };

  return (
    <li className={`about-article`} key={id}>
      <h1 id="title-about">{title}</h1>
      <img src={image} alt={title} />
      <p className={!showText ? "text-long" : "text-short"}>
        {showText ? info : info.slice(0, 200)}{" "}
        <button className={`btn`} onClick={toggleTextVisibility}>
          {!showText ? "Read more" : "Show-less"}
        </button>
      </p>
    </li>
  );
}
