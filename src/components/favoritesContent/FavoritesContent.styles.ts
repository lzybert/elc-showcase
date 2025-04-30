import styled from "styled-components";

export const CardSiteWrapper = styled.div`
  margin: 16px;
  padding: 16px;
  border: 3px solid #000000;
  height: 500px;
  max-width: 600px;
  width: 100%;
  background: #fffff9;
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 10px;
`;

export const StyledCTA = styled.button`
  font-size: 0.875em;
  font-weight: 700;
  padding: 0.375em 0;
  border: 3px solid #000;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background: #000;

  &:hover {
    background: #3d3d3d;
    border-color: #3d3d3d;
  }
`;
