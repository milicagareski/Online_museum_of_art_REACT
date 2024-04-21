// SingleItemDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleItemDetails() {
  const { itemId } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    // Fetch data for the single item based on the item ID
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/artworks/${itemId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch item data");
        }
        const singleItem = await response.json();
        setItem(singleItem);
        console.log(singleItem);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItem();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display item details */}
      <h1>{item.data.id}</h1>
      {/* Other item details */}
    </div>
  );
}
