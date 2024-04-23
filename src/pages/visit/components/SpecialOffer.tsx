import React from "react";
import { Link } from "react-router-dom";

export default function SpecialOffer() {
  return (
    <section className="offer">
      <div className="offer-article">
        <article className="showed">
          <h3>Only this week </h3>
        </article>
        <article className="container-offer">
          <div className="text">
            Special
            <br /> Offer
          </div>
        </article>
      </div>
      <div className="offer-article">
        <article className="hidden-offer">
          <h3>Only this week </h3>
        </article>
        <article id="offer-link">
          <Link to="/checkout" className="ticket-link">
            <h4>Buy 2 Tickets, Get 1 Free!</h4>
          </Link>
        </article>
      </div>
      {/* <p id="visit-info">
        Explore the rich tapestry of history across our three museum buildings.
        Delve into the exquisite beauty of artistic treasures, each steeped in
        centuries-old stories waiting to be discovered.
      </p> */}
    </section>
  );
}
