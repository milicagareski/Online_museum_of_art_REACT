import React, { useState, useEffect } from "react";
import CollectionHeader from "../../components/Collection/CollectionHeader";
import SingleArt from "../../components/Collection/SingleArt";
import FilteredItems from "../../components/Collection/FilteredItems";
import useFetch from "../../hooks/UseFetch";
import usePagination from "../../hooks/UsePagination";
import { GalleryItem } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

export default function Collection() {
  const [collection, setCollection] = useState(
    "https://backend-online-museum-of-art-react.onrender.com/api/artworks"
  );
  const { isLoading, items, isError } = useFetch(collection);
  const { pageNumber, pageCount, changePage, pageData } = usePagination(
    Array.isArray(items) ? items : [items], // Ensure items is an array
    20
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (
      e.currentTarget.elements.namedItem("departments") as HTMLSelectElement
    )?.value.toLowerCase();
    if (value === "collection") {
      setCollection(
        "https://backend-online-museum-of-art-react.onrender.com/api/artworks"
      );
    } else {
      setCollection(
        `https://backend-online-museum-of-art-react.onrender.com/api/artworks/${value}`
      );
    }
  };

  useEffect(() => {
    changePage(0);
  }, [collection]);

  const handleNextPage = () => {
    const nextPage = pageNumber + 1;
    changePage(nextPage);
  };

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

  return (
    <>
      {isLoading && (
        <section id="loading">
          <h1>Loading...</h1>
        </section>
      )}
      {!isLoading && (
        <section className="container collection">
          <CollectionHeader />
          <FilteredItems handleSubmit={handleSubmit} />
          <ul>
            {pageData().map((item: GalleryItem) => (
              <SingleArt key={item.id} item={item} />
            ))}
          </ul>
          <article className="buttons-pagination">
            <button
              className="btn"
              onClick={() => changePage(pageNumber - 1)}
              disabled={pageNumber === 0}
            >
              Previous
            </button>
            <span>
              {pageNumber + 1} / {pageCount}
            </span>
            <button
              className="btn"
              onClick={handleNextPage}
              disabled={pageNumber === pageCount - 1}
            >
              Next
            </button>
          </article>
        </section>
      )}
    </>
  );
}
