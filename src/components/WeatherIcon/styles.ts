import styled from "styled-components"

export const StyledWeatherIcon = styled.div`
  display: inline-block;
  height: 75px;
  margin-top: 8%;
  position: relative;
  width: 75px;

  &:hover span {
    visibility: visible;
  }
`

export const Icon = styled.img`
  height: 100%;
  width: 100%;
`

export const Tooltip = styled.span`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  padding: 5px 0;
  text-align: center;
  visibility: hidden;
  width: 120px;

  /* Position the tooltip */
  left: 95%;
  position: absolute;
  top: 6px;
  z-index: 1;
`
