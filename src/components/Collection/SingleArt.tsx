import { Link } from "react-router-dom";
import { SingleArtProps } from "../../pages/collection/collection-types";

export default function SingleArt({ item }: SingleArtProps) {
  return (
    <li key={item.id}>
      <article className="collection-title">
        <h6>TITLE:</h6>
        <h5>{item.title.slice(0, 30)}</h5>
      </article>
      <article className="creation-year">
        <h6>CREATION YEAR:</h6>
        <h5>{item.creation_date}</h5>
      </article>
      <img src={item.images.web.url} alt={item.title} />
      <article className="decrtiption">
        <h6>WANT TO KNOW MORE?</h6>
        <Link to={`/collection/${item.id}`} target="_blank">
          <button className="btn">READ HERE</button>
        </Link>
      </article>
    </li>
  );
}
