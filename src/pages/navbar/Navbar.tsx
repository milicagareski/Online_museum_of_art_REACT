import { useState } from "react";

import Title from "../../components/Navbar/Title";
import NavLinks from "../../components/Navbar/NavLinks";
import Button from "../../components/Navbar/Button";

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
      <div>
        <NavLinks
          showNav={showNav}
          toggleBtn={toggleBtn}
          setShowNav={setShowNav}
        />
      </div>
    </section>
  );
};

export default Navbar;
