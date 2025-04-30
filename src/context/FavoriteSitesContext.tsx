import { useFavourites } from "@/hooks/useFavourites.ts";
import { createContext, useContext } from "react";

const FavoriteSitesContext = createContext<ReturnType<typeof useFavourites> | null>(null);

export const FavoriteSitesProvider = ({ children }: { children: React.ReactNode }) => {
  const favoriteSitesState = useFavourites();
  return (
    <FavoriteSitesContext.Provider value={favoriteSitesState}>
      {children}
    </FavoriteSitesContext.Provider>
  );
};

export const useFavoriteSitesContext = () => {
  const ctx = useContext(FavoriteSitesContext);
  if (!ctx) throw new Error("useFavoriteSitesContext must be used within FavoriteSitesProvider");
  return ctx;
};
