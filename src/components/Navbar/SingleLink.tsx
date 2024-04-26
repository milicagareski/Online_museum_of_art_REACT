import { Link } from "react-router-dom";
import { SingleLinkProps } from "../../pages/navbar/nav-types";

function SingleLink({ singleLink, toggleBtn }: SingleLinkProps) {
  const { id, url, title } = singleLink;
  return (
    <li key={id} onClick={toggleBtn}>
      <Link to={url}>{title}</Link>
    </li>
  );
}

export default SingleLink;
