import { Link } from "react-router-dom";
export default function Error() {
  return (
    <>
      <h1>The page do not exist</h1>
      <button className="btn">
        <Link to="/">back to home</Link>
      </button>
    </>
  );
}
