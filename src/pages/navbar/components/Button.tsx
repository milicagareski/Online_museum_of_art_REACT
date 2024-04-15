interface ButtonProps {
  toggleBtn: () => void;
}

export default function Button({ toggleBtn }: ButtonProps) {
  return (
    <section>
      <button className="nav-btn" onClick={toggleBtn}>
        <i className="fas fa-bars"></i>
      </button>
    </section>
  );
}
