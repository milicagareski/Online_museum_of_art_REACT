export interface SingleArtProps {
  item: {
    id: number;
    title: string;
    creation_date: string;
    images: {
      web: {
        url: string;
      };
    };
  };
}

export interface FilteredItemsProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}