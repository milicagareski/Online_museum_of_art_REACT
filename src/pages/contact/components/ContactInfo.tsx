import React from "react";
import Location from "../../home/components/location";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <h2>Contact information:</h2>
      <article className="contact-ways">
        <p>
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          magnolia_art@gmail.com
        </p>
      </article>
      <article className="contact-ways phone">
        <p>
          <span>
            <i className="fa-solid fa-phone"></i>
          </span>
          213-515-7312
        </p>
      </article>
      <h2>Come and visit us</h2>
      <Location />
      <h2>You can visit us any day from</h2>
      <article className="contact-ways open-hours">
        <p>
          <span>
            <i className="fa-solid fa-door-open"></i>
          </span>
          MON-SAT: 8:00 AM TO 5:00 PM
        </p>
      </article>
    </section>
  );
}
