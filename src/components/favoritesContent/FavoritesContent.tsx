import { useFavourites } from "@/hooks/useFavourites.ts";
import { useNavigate } from "react-router-dom";
import React from "react";
import { CardSiteWrapper, StyledCTA } from "./FavoritesContent.styles";

export const FavoritesContent = () => {
  const { favoriteSites, removeFavorite } = useFavourites();
  const navigate = useNavigate();

  const learnMoreClick = (id: string) => {
    navigate(`/site/${id}`, { replace: true });
  };

  return (
    <>
      {favoriteSites.map((item, index) => (
        <CardSiteWrapper key={index}>
          {item.name}
          <StyledCTA onClick={() => learnMoreClick(item.id.toString())}>Learn More</StyledCTA>
          <StyledCTA onClick={() => removeFavorite(item.id.toString())}>Remove</StyledCTA>
        </CardSiteWrapper>
      ))}
    </>
  );
};
