import { Building } from "../../data/data-visit-museum";
export interface SingleOrderProps {
  payment: boolean;
  submitOrder: boolean;
  setSubmitOrder: (value: boolean) => void;
}

export interface SingleCardProps {
  building: Building;
  index: number;
  buildingInputs: number[];
  setInput: (index: number, value: number) => void;
}