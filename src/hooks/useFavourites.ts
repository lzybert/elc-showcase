import { useCallback, useEffect, useState } from "react";

const fetchFavorites = async (ids: string[]): Promise<ICardSite[]> => {
  const res = await fetch(`/api/v1/favorites?ids=${ids.join(",")}`);

  return res.json();
};

export const useFavourites = () => {
  const initState = (): string[] => {
    const favs = localStorage.getItem("favoriteSites");
    if (favs) {
      return JSON.parse(favs);
    }
    return [];
  };
  const [favorites, setFavorites] = useState<string[]>(initState());
  const [favoriteSites, setFavoritesSites] = useState<ICardSite[]>([]);

  useEffect(() => {
    const currentFavs = localStorage.getItem("favoriteSites");
    if (currentFavs === JSON.stringify(favorites)) {
      return;
    }
    localStorage.setItem("favoriteSites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (!favorites.length) {
      setFavoritesSites([]);
      return;
    }
    fetchFavorites(favorites)
      .then(setFavoritesSites)
      .catch((error) => {
        console.log(error);
        setFavoritesSites([]);
      });
  }, [favorites]);

  const addFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      console.log(favorites);
      return favorites.includes(id);
    },
    [favorites]
  );

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((siteId) => siteId !== id));
  }, []);

  return { favoriteSites, addFavorite, removeFavorite, isFavorite };
};
