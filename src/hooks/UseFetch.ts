import { useState, useEffect } from 'react';

export interface GalleryItem {
  id: any;
  title: any;
  did_you_know: any;
  images: any;
  creation_date: any;
  technique: any;
  description: any;
}

export type FetchResult = {
  isLoading: boolean;
  items: GalleryItem | GalleryItem[]; // Allow for single object or array
  error?: Error | null;
}

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<GalleryItem | GalleryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const abortSignal = controller.signal;
      try {
        const response = await fetch(url,{ signal: abortSignal });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const gallery = await response.json();
        setItems(gallery.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, items };
};

export default useFetch;
