import { JSX } from "react";
import styles from "./index.module.css";
import Carousel from "@/components/carousel/Carousel.tsx";
import styled from "styled-components";

const StyledHeader = styled.h1`
    margin-bottom: 1em;
`;
const HomePage = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <StyledHeader>Explore World Heritage Sites</StyledHeader>
        <Carousel />
    </div>
  );
};

export default HomePage;
