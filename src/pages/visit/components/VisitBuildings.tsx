import { Building, buildings } from "../../../data/data-visit";
import SingleBuilding from "./SingleBuilding";

export default function VisitBuildings() {
  return (
    <ul className="visit-list">
      {buildings.map((building: Building) => (
        <SingleBuilding building={building} />
      ))}
    </ul>
  );
}
