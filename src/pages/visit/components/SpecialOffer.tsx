import React from "react";
import { Link } from "react-router-dom";

export default function SpecialOffer() {
  return (
    <section className="offer">
      <article>
        <h3>Only this week </h3>
      </article>
      <article className="container-offer">
        <div className="text">
          Special
          <br /> Offer
        </div>
      </article>
      <article>
        <Link to="/checkout" className="link">
          <h4>Buy 2 Tickets, Get 1 Free!</h4>
        </Link>
      </article>
    </section>
  );
}
