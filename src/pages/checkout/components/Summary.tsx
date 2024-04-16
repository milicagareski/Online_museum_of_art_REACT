// Summary.tsx
import React from "react";

interface SummaryProps {
  totalPrice: number;
}

export default function Summary(props: SummaryProps) {
  const { totalPrice } = props;

  return (
    <article>
      <h1>Total: ${totalPrice.toFixed(2)}</h1>
    </article>
  );
}
