import styled from "styled-components"

export const StyledLocationPicker = styled.div`
  align-self: flex-start;
  background-color: #fff;
  box-shadow: 1px 1px 4px 3px rgba(28, 33, 39, 0.6);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 30%;

  :hover {
    cursor: pointer;
  }

  & > div:first-of-type {
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 4vh;

    @media (max-width: 1366px) {
      height: 6vh;
    }
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

export const OptionsMenu = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 4px 3px rgba(28, 33, 39, 0.6);
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 4px;
  position: absolute;
  top: 4.2vh;
  width: 100%;

  :hover {
    cursor: pointer;
  }

  & > div {
    align-items: center;
    display: flex;
    height: 4vh;

    :hover {
      background-color: #f0ecec;
    }
  }

  @media (max-width: 1366px) {
    top: 6.2vh;
  }
`
