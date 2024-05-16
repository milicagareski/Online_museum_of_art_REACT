import { useState, useMemo } from "react";

interface PaginationResult<T> {
  pageNumber: number;
  pageCount: number;
  changePage: (pageNumber: number) => void;
  pageData: T[]
}

function usePagination<T>(items: T[], pageLimit: number): PaginationResult<T> {
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(items.length / pageLimit);

  const changePage = (pN: number) => {
    setPageNumber(pN);
  };

  const pageData = useMemo(() => {
    const s = pageNumber * pageLimit;
    const e = s + pageLimit;
    return items.slice(s, e);
  }, [pageNumber, items, pageLimit]);

  return { pageNumber, pageCount, changePage, pageData };
}

export default usePagination;
