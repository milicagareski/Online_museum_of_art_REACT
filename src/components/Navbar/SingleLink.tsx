import { Link } from "react-router-dom";
import { LinkData } from "../../data/data-links";

interface SingleLinkProps {
  singleLink: LinkData;
  toggleBtn: () => void;
}

function SingleLink({ singleLink, toggleBtn }: SingleLinkProps) {
  const { id, url, title } = singleLink;
  return (
    <li key={id} onClick={toggleBtn}>
      <Link to={url}>{title}</Link>
    </li>
  );
}

export default SingleLink;
