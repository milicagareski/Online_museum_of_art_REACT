import { useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";

export default function SingleItemDetails() {
  const { itemId } = useParams();

  const { isLoading, items } = useFetch(
    `http://localhost:5000/api/artworks/${itemId}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const item = Array.isArray(items) ? items[0] : items;

  return (
    <section className="container art-details">
      <div className="art-item">
        <article className="single-item-art">
          <h6>TITLE:</h6>
          <h5>{item.title}</h5>
        </article>
        <article className="art single-item-art">
          <h6>DID YOU KNOW:</h6>
          <h5>{item.did_you_know}</h5>
        </article>
        <img
          className="single-item-img"
          src={item.images.web.url}
          alt={item.title}
        />
      </div>
      <div className="art-item">
        <article className="single-item-art">
          <h6>CREATION DATE:</h6>
          <h5>{item.creation_date}</h5>
        </article>
        <article className="technique single-item-art">
          <h6>TECHNIQUE:</h6>
          <h5>{item.technique}</h5>
        </article>
        <article className="desc single-item-art">
          <h6>DESCRIPTION:</h6>
          <h5>{item.description}</h5>
        </article>
      </div>
    </section>
  );
}
