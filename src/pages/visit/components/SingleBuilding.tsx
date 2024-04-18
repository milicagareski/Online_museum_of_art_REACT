import { useState } from "react";
import { Building } from "../../../data/data-visit";
import { ShowHideTextButton } from "../../../hooks/ShowHideTextButton";
import { Link } from "react-router-dom";

interface BuildingProps {
  building: Building;
}

export default function SingleBuilding({ building }: BuildingProps) {
  const { id, title, image, info, price } = building;
  const [showText, setShowText] = useState(false);

  const toggleBtn = () => {
    setShowText(!showText);
  };
  return (
    <li key={id}>
      <h1>{title}</h1>
      <h5>Entry price: ${price}</h5>
      <article className="link" id="ticket-link">
        <Link to="/checkout">
          <h4>buy ticket</h4>
        </Link>
      </article>
      <img src={image} alt={title} />
      <p>{showText ? info : info.slice(0, 200)}</p>
      <ShowHideTextButton
        toggleTextVisibility={toggleBtn}
        showText={showText}
      />
    </li>
  );
}
