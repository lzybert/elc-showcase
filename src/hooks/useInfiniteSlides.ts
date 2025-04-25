import { useEffect, useState } from 'react';

export function useInfiniteSlides() {
  const [slides, setSlides] = useState<ICardSite[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const loadSlides = async (page: number, itemsPerPage: number) => {
    setLoading(true);
    const res = await fetch(`api/v1/sites?page=${page}&limit=${itemsPerPage}`);
    const data = await res.json();
    setSlides((prev) => [...prev, ...data.data]);
    setLoading(false);
    return data.data.length;
  };

  const loadMore = (): Promise<number> => {
    const nextPage = page + 1;
    setPage(nextPage);
    return loadSlides(nextPage, itemsPerPage);
  };

  useEffect(() => {
    loadSlides(page, itemsPerPage);
  }, [page]);

  return { slides, loading, loadMore };
}