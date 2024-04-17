import { useState } from "react";
import { Building } from "../../../data/data-visit";
import { ShowHideTextButton } from "../../../hooks/ShowHideTextButton";

interface BuildingProps {
  building: Building;
}

export default function SingleBuilding({ building }: BuildingProps) {
  const { id, title, image, info, price } = building;
  const [showText, setShowText] = useState(false);

  const toggleBtn = () => {
    setShowText(true);
  };
  return (
    <li key={id}>
      <h1>{title}</h1>
      <h5>Entry price: ${price}</h5>
      <article className="link" id="ticket-link">
        <h4>buy ticket</h4>
      </article>
      <img src={image} alt={title} />
      <ShowHideTextButton
        toggleTextVisibility={toggleBtn}
        showText={showText}
      />
      <p>{`${showText ? info : ""}`}</p>
    </li>
  );
}
