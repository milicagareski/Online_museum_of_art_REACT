import React, { useState } from "react";

interface SingleCardProps {
  ticket: Item;
  handleTotalPrice: (price: number) => void;
}

interface Item {
  id: number;
  title: string;
  price: number;
}

export function SingleCard(props: SingleCardProps) {
  const { ticket, handleTotalPrice } = props;
  const [cards, setCards] = useState(0);

  const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setCards(value);
      handleTotalPrice(value * ticket.price);
    } else {
      setCards(0);
    }
  };

  return (
    <article key={ticket.id} className="buy-card">
      <label htmlFor={`museum_${ticket.id}`}>
        <h1>{ticket.title}</h1>
        <h2>{` $${ticket.price}`}</h2>
      </label>
      <input
        id={`museum_${ticket.id}`}
        type="number"
        name={`museum_${ticket.id}`}
        value={cards}
        onChange={setInput}
        className="input-ticket"
      />
    </article>
  );
}
