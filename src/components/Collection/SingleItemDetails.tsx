import { useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

export default function SingleItemDetails() {
  const { itemId } = useParams<any>();

  const { isLoading, items, isError } = useFetch(
    `https://backend-online-museum-of-art-react.onrender.com/api/artworks/${itemId}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <>
        <h1>The page do not exist</h1>
        <button className="btn">
          <Link to="/">back to home</Link>
        </button>
      </>
    );
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
