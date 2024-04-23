import VisitHeader from "./components/VisitHeader";
import VisitBuildings from "./components/VisitBuildings";
import SpecialOffer from "./components/SpecialOffer";

export default function Visit() {
  return (
    <section className="container">
      <VisitHeader />
      <SpecialOffer />
      <VisitBuildings />
    </section>
  );
}
