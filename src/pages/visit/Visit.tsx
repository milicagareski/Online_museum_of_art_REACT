import React from "react";
import VisitHeader from "./components/VisitHeader";
import VisitBuildings from "./components/VisitBuildings";

export default function Visit() {
  return (
    <section className="container">
      <VisitHeader />
      <VisitBuildings />
    </section>
  );
}
