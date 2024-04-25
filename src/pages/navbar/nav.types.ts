import { LinkData } from "../../data/data-links";
export interface NavbarProps {
  toggleBtn: () => void;
  showNav: boolean;
  singleLink: LinkData;
}