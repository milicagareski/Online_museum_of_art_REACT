import { useState } from "react";

import Title from "./components/Title";
import NavLinks from "./components/NavLinks";
import Button from "./components/Button";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleBtn = (): void => {
    setShowNav(!showNav);
  };
  return (
    <section id="nav-section">
      <div className="title-section">
        <Title />
        <Button toggleBtn={toggleBtn} />
      </div>
      <section>
        <h4>museum of art</h4>
      </section>
      <NavLinks showNav={showNav} toggleBtn={toggleBtn} />
    </section>
  );
};

export default Navbar;
