import { Building } from "../../../data/data-visit";

interface SingleCardProps {
  building: Building;
  index: number;
  buildingInputs: number[];
  setInput: (index: number, value: number) => unknown;
}

export default function SingleCard(props: SingleCardProps) {
  const { building, index, buildingInputs, setInput } = props;
  return (
    <article className="buy-card">
      <label htmlFor={`museum_${building.id}`}>
        <h1 id="building-title">{building.title}</h1>
        <h2 id="building-price">{` $${building.price}`}</h2>
      </label>
      <input
        id={`museum_${building.id}`}
        type="number"
        name={`museum_${building.id}`}
        value={buildingInputs[index]}
        onChange={(e) => setInput(index, Number(e.target.value))}
        className="input-ticket"
      />
    </article>
  );
}
