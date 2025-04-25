import styled from "styled-components";

export const CardSiteWrapper = styled.div`
    margin: 64px;
    padding: 16px;
    border: 3px solid #000000;
    height: auto;
    min-height: 500px;
    width: 100%;
    max-width: 50vw;
    background: #FFFFF9;
    display: flex;
    flex-direction: column;
`
export const DetailsTextLayer = styled.div`
    font-size: 1em;
    line-height: 1em;
    flex-grow: 1;
`
export const DetailsLocationText = styled.p`
    font-size: 0.925em;
    line-height: 1em;
    align-items: center;
    display: flex;
`
export const DetailsSmallText = styled.p`
    font-size: 0.875em;
    font-weight: 500;
    text-transform: uppercase;
    margin: 1.5em 0 0 0;
    padding: 0;
    align-items: center;
    display: flex;
`
export const GetDirectionsLink = styled.button`
    font-size: 0.875em;
    font-weight: 700;
    padding: 0.375em 0;
    border: 3px solid #000;
    text-transform: uppercase;
    cursor: pointer;
    color: #FFF;
    background: #000;
    
    &:hover {
        background: #3d3d3d;
        border-color: #3d3d3d;
    }
`

export const DetailsImageWrapper = styled.div`
    margin: 1em 0;
    border: 3px solid #CCC;
    width: auto;
    
    img {
        width: 100%;
    }
`