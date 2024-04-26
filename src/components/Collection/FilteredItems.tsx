import { FilteredItemsProps } from "../../pages/collection/collection-types";

export default function FilteredItems({ handleSubmit }: FilteredItemsProps) {
  return (
    <form id="filtered-items" onSubmit={handleSubmit}>
      <label htmlFor="departments-select">Choose department:</label>
      <select name="departments" id="departments-select">
        <option value="Collection">ALL COLLECTION</option>
        <option value="Paintings">PAINTINGS</option>
        <option value="Photography">PHOTOGRAPHY</option>
        <option value="Sculptures">SCULPTURES</option>
        <option value="Statues">STATUES</option>
      </select>
      <button type="submit" id="departments-button" className="btn">
        Submit
      </button>
    </form>
  );
}
