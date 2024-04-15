import HomeHeader from "./components/HomeHeader";
import HomeSlider from "./components/HomeSlider";
import BuyTicket from "./components/BuyTicket";

export default function Home() {
  return (
    <section className="container">
      <HomeHeader />
      <HomeSlider />
      <BuyTicket />
    </section>
  );
}
