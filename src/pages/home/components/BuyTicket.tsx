import { Link } from "react-router-dom";
import Location from "./location";

function BuyTicket() {
  return (
    <article className="ticket-container">
      <h2>join us for an unforgettable visit</h2>
      <div className="ticket">
        <Location />
        <Link to="/visit" className="link">
          Buy your ticket <span id="now">now</span>
        </Link>
        <Link to="/visit" className="link">
          <span id="ticket-icon">
            <i className="fa-solid fa-ticket"></i>
          </span>
        </Link>
      </div>
    </article>
  );
}

export default BuyTicket;
