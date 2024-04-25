export default interface AboutItem {
  id: number;
  title: string;
  info: string;
  image: string;
}

export default interface AboutContextType {
  toggleTextVisibility: (itemId: number) => void;
  showText: Record<number, boolean>;
}
