import { useState } from "react";

interface SingleOrderProps {
  payment: boolean;
  submitOrder: boolean;
  setSubmitOrder: (value: boolean) => void;
}

export default function SubmitOrder(props: SingleOrderProps) {
  const { payment, submitOrder, setSubmitOrder } = props;
  const [creditCard, setCreditCard] = useState("");
  const [sequrutyNum, setSequrutyNum] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (creditCard && sequrutyNum) {
      setSubmitOrder(true);
      setCreditCard("");
      setSequrutyNum("");
      setTimeout(() => {
        setSubmitOrder(false);
      }, 3000);
    }
  };

  return (
    <>
      {payment && (
        <>
          {submitOrder && (
            <article>
              <p id="success" style={{ color: "green" }}>
                order successfully submited
              </p>
            </article>
          )}
          <article>
            <form id="payment">
              <label htmlFor="credit-card">
                <h2>Enter Credit Card Number</h2>
                <input
                  type="number"
                  id="credit-card"
                  required
                  placeholder="credit card number"
                  value={creditCard}
                  onChange={(e) => {
                    setCreditCard(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="security-code">
                <h2>Enter Security Code (CVV)</h2>
                <input
                  type="number"
                  id="sequrity-code"
                  required
                  placeholder="sequrity code"
                  value={sequrutyNum}
                  onChange={(e) => {
                    setSequrutyNum(e.target.value);
                  }}
                />
              </label>

              <button className="btn submit-btn" onClick={handleSubmit}>
                submit order
              </button>
            </form>
          </article>
        </>
      )}
    </>
  );
}
