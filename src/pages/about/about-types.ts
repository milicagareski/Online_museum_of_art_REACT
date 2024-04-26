export default interface AboutItem {
  id: number;
  title: string;
  info: string;
  image: string;
}


export interface SingleItemProps {
  singleItem: AboutItem;
}

export interface AboutContextType {
  toggleTextVisibility: (itemId: number) => void;
  showText: Record<number, boolean>;
}
