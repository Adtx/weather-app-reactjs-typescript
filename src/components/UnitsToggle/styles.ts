import styled from "styled-components"
import { StyledUnitsToggleProps } from "./types"

export const StyledUnitsToggle = styled.div<StyledUnitsToggleProps>`
  align-items: center;
  display: flex;
  height: 4vh;
  justify-content: space-between;
  opacity: ${(props) => (!props.loadingData ? "1" : "0.4")};
  width: 25%;

  & label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  & span {
    position: absolute;
    cursor: pointer;
    height: 13px;
    width: 60%;
    top: 13px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.38);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    color: #ec6e4c;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: -1px;
    bottom: -5px;
    background-color: #ec6e4c;
    border-radius: 50%;

    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  & input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
`

export const UnitLabel = styled.h3`
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
`
