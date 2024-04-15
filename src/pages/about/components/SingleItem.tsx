import React, { useState } from "react";
import AboutItem from "./about.types";
import { ShowHideTextButton } from "../../../hooks/ShowHideTextButton";

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
    <li className="about-article" key={id}>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{showText ? info : `${info.slice(0, 200)}`}</p>
      <ShowHideTextButton
        toggleTextVisibility={toggleTextVisibility}
        showText={showText}
      />
    </li>
  );
}
