import { useState, useEffect } from "react";
import { buildings } from "../../../data/data-visit";
import SingleCard from "./SingleCard";
import SubmitOrder from "./SubmitOrder";

export default function ShopingCard() {
  const [total, setTotal] = useState<number>(0);
  const [payment, setPayment] = useState(false);
  const [submitOrder, setSubmitOrder] = useState(false);

  const [buildingInputs, setBuildingInputs] = useState<number[]>(
    buildings.map(() => 0)
  );

  const setInput = (index: number, value: number) => {
    const newInputs = [...buildingInputs];
    newInputs[index] = value;
    if (value < 0) {
      newInputs[index] = 0;
    }
    setBuildingInputs(newInputs);
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    buildingInputs.forEach((input, index) => {
      totalPrice += input * buildings[index].price;
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [buildingInputs]);

  return (
    <>
      <form>
        {buildings.map((building, index) => (
          <SingleCard
            key={building.id}
            building={building}
            index={index}
            buildingInputs={buildingInputs}
            setInput={setInput}
          />
        ))}
      </form>
      <article>
        <h1 id="total">Total: ${total}</h1>
      </article>
      <button
        className="btn pay-btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setPayment(true);
        }}
      >
        PAY NOW
      </button>
      <SubmitOrder
        payment={payment}
        submitOrder={submitOrder}
        setSubmitOrder={setSubmitOrder}
      />
    </>
  );
}
