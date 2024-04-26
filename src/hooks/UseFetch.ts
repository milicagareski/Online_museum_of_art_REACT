import { useState, useEffect } from 'react';

export interface GalleryItem {
  id: number;
  title: string;
  did_you_know: string;
  images: any;
  creation_date: any;
  technique: string;
  description: string;
}

export type FetchResult = {
  isLoading: boolean;
  items: GalleryItem | GalleryItem[]; 
  isError: boolean;
}

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
  const [items, setItems] = useState<GalleryItem | GalleryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const abortSignal = controller.signal;
      try {
        const response = await fetch(url, { signal: abortSignal });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const gallery = await response.json();
        setIsLoading(false)
        setIsError(false)
        setItems(gallery.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, items, isError };
};

export default useFetch;
