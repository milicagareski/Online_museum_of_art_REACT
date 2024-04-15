import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; <span id="date">{date}</span> Built by
        <Link to="/" id="footerName">
          {" "}
          Milica Gareski
        </Link>
      </p>
    </footer>
  );
}
