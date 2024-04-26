import AboutHeader from "../../components/About/AboutHeader";
import AboutInfo from "../../components/About/AboutInfo";
import AboutSlider from "../../components/About/AboutSlider";
import { createContext, useState } from "react";
import { AboutContextType } from "./about-types";

export const AboutContext = createContext<AboutContextType | null>(null);

const ContextInfo = () => {
  const [showText, setShowText] = useState<Record<number, boolean>>({});

  const toggleTextVisibility = (itemId: number) => {
    setShowText((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <AboutContext.Provider value={{ toggleTextVisibility, showText }}>
      <AboutInfo />
    </AboutContext.Provider>
  );
};

export default function About() {
  return (
    <section className="container about">
      <AboutHeader />
      <AboutSlider />
      <ContextInfo />
    </section>
  );
}
