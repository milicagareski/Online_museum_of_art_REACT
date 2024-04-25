import HomeHeader from "../../components/Home/HomeHeader";
import HomeSlider from "../../components/Home/HomeSlider";
import BuyTicket from "../../components/Home/BuyTicket";

export default function Home() {
  return (
    <section className="container">
      <HomeHeader />
      <HomeSlider />
      <BuyTicket />
    </section>
  );
}
