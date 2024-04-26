import { LinkData } from "../../data/data-nav-links";

export interface NavbarProps {
  toggleBtn: () => void;
  showNav: boolean;
  singleLink: LinkData;
}

export interface NavLinksProps {
  showNav: boolean;
  toggleBtn: () => void;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SingleLinkProps {
  singleLink: LinkData;
  toggleBtn: () => void;
}