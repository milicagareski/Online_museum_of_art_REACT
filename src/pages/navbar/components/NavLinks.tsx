import { useEffect, useRef } from "react";
import SingleLink from "./SingleLink";
import { LinkData, NavLinksData } from "../../../data/data-links";

interface NavLinksProps {
  showNav: boolean;
  toggleBtn: () => void;
}

function NavLinks({ showNav, toggleBtn }: NavLinksProps) {
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (linksRef.current && linksContainerRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showNav) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = "0px";
      }
    }
  }, [showNav]);
  return (
    <nav ref={linksContainerRef} className={showNav ? "show-nav" : "hide-nav"}>
      <ul ref={linksRef} className="nav-links">
        {NavLinksData.map((link: LinkData) => (
          <SingleLink key={link.id} toggleBtn={toggleBtn} singleLink={link} />
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
