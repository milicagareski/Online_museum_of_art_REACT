import AboutHeader from "./components/AboutHeader";
import AboutInfo from "./components/AboutInfo";
import AboutSlider from "./components/AboutSlider";

export default function About() {
  return (
    <section className="container about">
      <AboutHeader />
      <AboutSlider />
      <AboutInfo />
    </section>
  );
}
