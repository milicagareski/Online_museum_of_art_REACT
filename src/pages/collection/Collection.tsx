import React, { useState, useEffect } from "react";
import CollectionHeader from "./components/CollectionHeader";
import SingleArt from "./components/SingleArt";
import FilteredItems from "./components/FilteredItems";
import useFetch from "../../hooks/UseFetch";
import usePagination from "../../hooks/UsePagination";
import { GalleryItem } from "../../hooks/UseFetch"; // Import the GalleryItem type

export default function Collection() {
  const [collection, setCollection] = useState(
    "http://localhost:5000/api/artworks"
  );
  const { isLoading, items } = useFetch(collection);
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
      setCollection("http://localhost:5000/api/artworks");
    } else {
      setCollection(`http://localhost:5000/api/artworks/${value}`);
    }
  };

  useEffect(() => {
    changePage(0);
  }, [collection]);

  const handleNextPage = () => {
    const nextPage = pageNumber + 1;
    changePage(nextPage);
  };

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
