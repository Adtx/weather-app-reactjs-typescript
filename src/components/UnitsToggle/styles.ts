import styled from "styled-components"

export const StyledUnitsToggle = styled.div`
  align-items: center;
  display: flex;
  height: 4vh;
  justify-content: space-between;
  width: 25%;

  & .MuiSwitch-thumb {
    color: #ec6e4c;
  }

  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #283137;
  }
`

export const UnitLabel = styled.h3`
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
`
