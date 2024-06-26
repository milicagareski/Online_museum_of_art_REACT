import { useState, useEffect } from "react";
import { buildings } from "../../data/data-visit-museum";
import SingleCard from "./SingleCard";
import SubmitOrder from "./SubmitOrder";

export default function ShopingCard() {
  const [total, setTotal] = useState<number>(0);
  const [payment, setPayment] = useState<boolean>(false);
  const [submitOrder, setSubmitOrder] = useState<boolean>(false);

  const [buildingInputs, setBuildingInputs] = useState<number[]>(
    buildings.map(() => 0)
  );

  const setInput = (index: number, value: number): void => {
    const newInputs = [...buildingInputs];
    newInputs[index] = value < 0 ? 0 : value;
    setBuildingInputs(newInputs);
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    buildingInputs.forEach((input, index) => {
      // console.log(buildingInputs);
      totalPrice += input * buildings[index].price;
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [buildingInputs]);

  return (
    <>
      <form className="select-card">
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
