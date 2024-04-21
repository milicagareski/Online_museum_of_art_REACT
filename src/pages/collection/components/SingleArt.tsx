import React from "react";
import { Link } from "react-router-dom";

export default function SingleArt({ item }: any) {
  return (
    <li key={item.id}>
      <article className="collection-title">
        <h6>TITLE:</h6>
        <h5>{item.title}</h5>
      </article>
      {item.creators.map((element: any) => {
        return (
          <article className="collection-author">
            <h6 className="author">AUTHOR:</h6>
            <h5 className="author-desc">{element.description}</h5>
          </article>
        );
      })}
      <article className="creation-year">
        <h6>CREATION YEAR:</h6>
        <h5>{item.creation_date}</h5>
      </article>
      <img src={item.images.web.url} alt={item.title} />
      <article className="decrtiption">
        <h6>WANT TO KNOW MORE?</h6>
        <Link to={item.url} target="blank">
          <button className="btn">CLICK HERE</button>
        </Link>
      </article>
    </li>
  );
}
