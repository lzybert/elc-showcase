import React, { JSX } from "react";
import styles from "./index.module.css";
import styled from "styled-components";
import { FavoritesContent } from "@/components/favoritesContent/FavoritesContent.tsx";

const StyledHeader = styled.h1`
  margin-bottom: 1em;
`;

const FavoritesPage = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <StyledHeader>Favorites</StyledHeader>
      <FavoritesContent />
    </div>
  );
};

export default FavoritesPage;
