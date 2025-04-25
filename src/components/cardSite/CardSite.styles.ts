import styled from "styled-components";

export const CardSiteWrapper = styled.div`
    margin: 64px;
    padding: 16px;
    border: 3px solid #000000;
    height: 500px;
    width: 100%;
    background: #FFFFF9;
    display: flex;
    flex-direction: column;
`
export const TextLayer = styled.div`
    font-size: 0.875em;
    line-height: 1em;
    flex-grow: 1;
`
export const HeaderText = styled.h2`
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    font-weight: 900;
    margin-top: 0.375em;
`
export const SmallText = styled.p`
    font-size: 0.675em;
    line-height: 1.5em;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    align-items: center;
    display: flex;
`
export const SmallTextBold = styled(SmallText)`
    font-weight: 700;
`
export const LearnMoreLink = styled.button`
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