import { useContext } from "react";
import { AboutContext } from "../../pages/about/About";
import { SingleItemProps } from "../../pages/about/about-types";

export default function SingleItem({ singleItem }: SingleItemProps) {
  const { id, title, info, image } = singleItem;
  const context = useContext(AboutContext);

  if (!context) {
    return null;
  }

  const { showText, toggleTextVisibility } = context;

  return (
    <li className={`about-article`}>
      <h1 id="title-about">{title}</h1>
      <img src={image} alt={title} />
      <p className={!showText[id] ? "text-long" : "text-short"}>
        {showText[id] ? info : info.slice(0, 200)}{" "}
        <button className={`about-btn`} onClick={() => toggleTextVisibility(id)}>
          {!showText[id] ? "Read more" : "Show less"}
        </button>
      </p>
    </li>
  );
}
