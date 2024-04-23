import { Link } from "react-router-dom";
import Location from "./location";

function BuyTicket() {
  return (
    <article className="ticket-container">
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
