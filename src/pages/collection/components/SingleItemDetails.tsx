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

  // Assuming your item data is an object and not an array
  const item = items[1]; // Assuming you are fetching a single item

  return (
    <div>
      {/* Display item details */}
      <h1>"hello"</h1> {/* Assuming id is a property of the item */}
      {/* Other item details */}
    </div>
  );
}
