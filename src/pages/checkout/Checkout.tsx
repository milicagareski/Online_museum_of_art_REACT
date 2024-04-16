import { useState } from "react";
import ChechoutHeader from "./components/ChechoutHeader";
import ShoppingCart from "./components/ShopingCard";
import Summary from "./components/Summary";

export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <section className="ticket-container">
      <ChechoutHeader />
      <ShoppingCart setTotalPrice={setTotalPrice} />
      <Summary totalPrice={totalPrice} />
    </section>
  );
}
