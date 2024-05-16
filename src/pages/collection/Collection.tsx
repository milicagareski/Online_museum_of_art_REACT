import React, { useState, useEffect, useMemo, useCallback } from "react";
import CollectionHeader from "../../components/Collection/CollectionHeader";
import SingleArt from "../../components/Collection/SingleArt";
import FilteredItems from "../../components/Collection/FilteredItems";
import Rating from "../../components/Collection/Rating";
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
    Array.isArray(items) ? items : [items],
    20
  );

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (
      e.currentTarget.elements.namedItem("departments") as HTMLSelectElement
    )?.value.toLowerCase();
    if (value === "collection") {
      setCollection(
        "https://backend-online-museum-of-art-react.onrender.com/api/artworks"
      );
    } else {
      setCollection(`https://backend-online-museum-of-art-react.onrender.com/api/artworks/${value}`);
    }
  },[collection])
  
  


  useEffect(() => {
    changePage(0);
  }, [collection]);

  const handleNextPage = () => {
    const nextPage = pageNumber + 1;
    changePage(nextPage);
  }
  

  const memoizedPageData = useMemo(() => {
    console.log('Testing useMemo hook');
    return pageData;
  }, [pageNumber, items]);

  const [btn, setBtn] = useState(0)

  if (isError) {
    return (
      <>
        <h1>The page does not exist</h1>
        <button className="btn">
          <Link to="/">Back to home</Link>
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
        <button style={{display:"none"}} onClick={() => setBtn(btn + 1)} >{btn}</button>
          <CollectionHeader />
          <FilteredItems handleSubmit={handleSubmit} />
          <ul>
            {memoizedPageData.map((item: GalleryItem) => (
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
          <Rating/>
        </section>
      )}
    </>
  );
}
