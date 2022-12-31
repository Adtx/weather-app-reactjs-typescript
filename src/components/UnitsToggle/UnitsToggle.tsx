import { useState } from "react"
import * as S from "./styles"
import { UnitsToggleProps } from "./types"

export enum UNITS {
  CELSIUS,
  FAHRENHEIT,
}
const NUMBER_OF_AVAILABLE_UNITS = 2

export const UnitsToggle = ({ setDisplayData }: UnitsToggleProps) => {
  const [checked, setChecked] = useState(false)
  const [unit, setUnit] = useState(UNITS.CELSIUS)

  const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setChecked((checked) => !checked)
    setDisplayData((displayData) => {
      const temperature = parseInt(displayData.temperature!)
      return {
        ...displayData,
        temperature:
          unit === UNITS.CELSIUS
            ? (temperature * (9 / 5) + 32).toFixed() + " ºF"
            : ((temperature - 32) * (5 / 9)).toFixed() + " ºC",
      }
    })
    setUnit((unit) => (unit + 1) % NUMBER_OF_AVAILABLE_UNITS)
  }

  return (
    <S.StyledUnitsToggle>
      <S.UnitLabel>ºC</S.UnitLabel>
      <label>
        <input type="checkbox" onClick={handleChange} />
        <span />
      </label>
      <S.UnitLabel>ºF</S.UnitLabel>
    </S.StyledUnitsToggle>
  )
}
