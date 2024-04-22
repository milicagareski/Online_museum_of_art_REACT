import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";

export default function SingleItemDetails() {
  const { itemId } = useParams();

  const { isLoading, items } = useFetch(
    `http://localhost:5000/api/artworks/${itemId}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(items);

  return (
    <section className="container">
      <article>
        <h6>TITLE:</h6>
        <h5>{items.title}</h5>
      </article>
      <article className="art">
        <h6>DID YOU KNOW:</h6>
        <h5>{items.did_you_know}</h5>
      </article>
      <img src={items.images.web.url} alt={items.title} />
      <article>
        <h6>CREATION DATE:</h6>
        <h5>{items.creation_date}</h5>
      </article>
      <article className="technique">
        <h6>TECHNIQUE:</h6>
        <h5>{items.technique}</h5>
      </article>
      <article className="desc">
        <h6>DESCRIPTION:</h6>
        <h5>{items.description}</h5>
      </article>
    </section>
  );
}
