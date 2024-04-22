import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import usePagination from "../../../hooks/UsePagination";

export default function SingleItemDetails() {
  const { itemId } = useParams();

  const { isLoading, items } = useFetch(
    `http://localhost:5000/api/artworks/${itemId}`
  );

  const { pageData } = usePagination(items, 10); // Assuming you want to display 10 related items per page

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Assuming your item data is an object and not an array
  const item = items[1]; // Assuming you are fetching a single item

  return (
    <div>
      {/* Display item details */}
      <h1>"hello"</h1>
      {/* Other item details */}

      {/* Display related items */}
      <ul>
        {pageData().map((relatedItem, index) => (
          <li key={index}>"world</li>
        ))}
      </ul>
    </div>
  );
}
