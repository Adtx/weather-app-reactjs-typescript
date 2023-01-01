import styled from "styled-components"

export const StyledLocationPicker = styled.select`
  background-color: #fff;
  box-shadow: 1px 1px 4px 3px rgba(28, 33, 39, 0.6);
  height: 4vh;
  width: 30%;

  :hover {
    cursor: pointer;
  }

  & > option {
    background-color: #fff;
    box-shadow: 1px 1px 4px 3px rgba(28, 33, 39, 0.6);
    height: 4vh;
    padding: 4px;
    width: 100%;

    :hover {
      background-color: #f0ecec;
      cursor: pointer;
    }

    @media (max-width: 1366px) {
      top: 6.2vh;
    }
  }

  @media (max-width: 1366px) {
    height: 6vh;
  }

  @media (min-width: 520px) {
    width: 26%;
  }

  @media (min-width: 530px) {
    width: 35%;
  }

  @media (min-width: 531px) {
    width: 30%;
  }

  @media (min-width: 610px) {
    width: 26%;
  }

  @media (min-width: 750px) {
    width: 30%;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }
`
