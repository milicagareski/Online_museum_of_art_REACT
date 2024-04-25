import VisitHeader from "../../components/VisitPage/VisitHeader";
import VisitBuildings from "../../components/VisitPage/VisitBuildings";
import SpecialOffer from "../../components/VisitPage/SpecialOffer";

export default function Visit() {
  return (
    <section className="container">
      <VisitHeader />
      <SpecialOffer />
      <VisitBuildings />
    </section>
  );
}
