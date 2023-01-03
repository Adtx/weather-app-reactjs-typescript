import { displayDataType, UNITS } from "../../WeatherApp"
import styled from "styled-components"

const StyledUnitsToggle = styled.div<StyledUnitsToggleProps>`
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

const UnitLabel = styled.h3`
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
`

interface UnitsToggleProps {
  unit: number
  loading: boolean
  setDisplayData: React.Dispatch<React.SetStateAction<displayDataType>>
}

export interface StyledUnitsToggleProps {
  loadingData: boolean
}

const NUMBER_OF_AVAILABLE_UNITS = 2

export const UnitsToggle = ({
  unit,
  loading,
  setDisplayData,
}: UnitsToggleProps) => {
  const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (!loading) {
      setDisplayData((displayData) => {
        let temperature = displayData.temperature
        temperature =
          unit === UNITS.CELSIUS
            ? Math.round(temperature * (9 / 5) + 32)
            : Math.round((temperature - 32) * (5 / 9))
        return {
          ...displayData,
          temperature: temperature,
          unit: (displayData.unit + 1) % NUMBER_OF_AVAILABLE_UNITS,
        }
      })
    }
  }

  return (
    <StyledUnitsToggle loadingData={loading}>
      <UnitLabel>ºC</UnitLabel>
      <label>
        <input type="checkbox" onClick={handleChange} disabled={loading} />
        <span />
      </label>
      <UnitLabel>ºF</UnitLabel>
    </StyledUnitsToggle>
  )
}
