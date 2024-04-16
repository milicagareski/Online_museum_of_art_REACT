import { Link } from "react-router-dom";
import Location from "./location";

function BuyTicket() {
  return (
    <article className="ticket-container">
      <h2>join us for an unforgettable visit</h2>
      <div className="ticket">
        <Location />
        <Link to="/visit" className="link">
          <h4>Buy your ticket</h4>
        </Link>
      </div>
    </article>
  );
}

export default BuyTicket;
