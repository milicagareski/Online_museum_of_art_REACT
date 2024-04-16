import React, { useState } from "react";
import { buildings } from "../../../data/data-visit";
import { SingleCard } from "./SingleCard";

interface ShoppingCartProps {
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export default function ShoppingCart(props: ShoppingCartProps) {
  const { setTotalPrice } = props;
  const [total, setTotal] = useState(0);

  const handleTotalPrice = (price: number) => {
    setTotalPrice(total + price);
  };

  return (
    <form>
      {buildings.map((building) => (
        <SingleCard
          key={building.id}
          ticket={building}
          handleTotalPrice={handleTotalPrice}
        />
      ))}
    </form>
  );
}
