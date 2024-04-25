import { LinkData } from "../../data/data-nav-links";
export interface NavbarProps {
  toggleBtn: () => void;
  showNav: boolean;
  singleLink: LinkData;
}