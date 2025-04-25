import styled from "styled-components";


interface SlidesContainerProps {
  $currentIndex: number;
}

interface ArrowLeftProps {
  $left?: boolean;
}
export const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    margin: 0 auto;
`;

export const SlidesContainer = styled.div<SlidesContainerProps>`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${({ $currentIndex }) => `translateX(-${$currentIndex * 100}%)`};
`;

export const Slide = styled.div`
    min-width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    //padding: 32px;
`;

export const ArrowButton = styled.button<ArrowLeftProps>`
    position: absolute;
    top: 50%;
    ${({ $left }) => ($left ? "left: 10px;" : "right: 10px;")}
    transform: translateY(-50%);
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 2;
    outline: none;
    background-color: transparent;
`;