import React from "react";
import SpecialOffer from "./SpecialOffer";

export default function VisitHeader() {
  return (
    <section className="visit-title">
      <h2>
        Ready to join us on our journey through art and culture? Plan your visit
        here!
      </h2>
      <SpecialOffer />
      <p id="visit-info">
        Explore the rich tapestry of history across our three museum buildings.
        Delve into the exquisite beauty of artistic treasures, each steeped in
        centuries-old stories waiting to be discovered.
      </p>
    </section>
  );
}
