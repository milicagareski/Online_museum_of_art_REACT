import logo from "../../../data/magnolia.png";
export default function Title(): JSX.Element {
  return (
    <section className="title">
      <img src={logo} className="logo" alt="logo.img" />
    </section>
  );
}
