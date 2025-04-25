import { JSX } from "react";
import styles from "./index.module.css";
import styled from "styled-components";

const StyledHeader = styled.h1`
    margin-bottom: 1em;
`;
const FavoritesPage = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <StyledHeader>Favorites</StyledHeader>
    </div>
  );
};

export default FavoritesPage;
