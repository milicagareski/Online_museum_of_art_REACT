import { useEffect, useState } from "react";
import CollectionHeader from "./components/CollectionHeader";
import SingleArt from "./components/SingleArt";
import FilteredItems from "./components/FilteredItems";

export default function Collection() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<any>([]);
  const [collection, setCollection] = useState(
    "http://localhost:5000/api/artworks"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (
      e.currentTarget.elements.namedItem("departments") as HTMLSelectElement
    )?.value;
    if (value === "Collection") {
      setCollection("http://localhost:5000/api/artworks");
    }
    if (value === "Paintings") {
      setCollection("http://localhost:5000/api/artworks/paintings");
    } else if (value === "Photographs") {
      setCollection("http://localhost:5000/api/artworks/photography");
    } else if (value === "Sculptures") {
      setCollection("http://localhost:5000/api/artworks/sculptures");
    } else if (value === "Statues") {
      setCollection("http://localhost:5000/api/artworks/statues");
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(collection);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const allCollection = await response.json();
      setItems(allCollection.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [collection]);

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
