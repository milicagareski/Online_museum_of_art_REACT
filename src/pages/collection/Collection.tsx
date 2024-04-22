import { useEffect, useState } from "react";
import CollectionHeader from "./components/CollectionHeader";
import SingleArt from "./components/SingleArt";
import FilteredItems from "./components/FilteredItems";
import useFetch from "../../hooks/UseFetch";

export default function Collection() {
  const [collection, setCollection] = useState(
    "http://localhost:5000/api/artworks"
  );

  const { isLoading, items } = useFetch(collection);

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
            {items.map((item: any) => (
              <SingleArt key={item.id} item={item} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
