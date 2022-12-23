import { Switch } from "@mui/material"
import { useState } from "react"
import * as S from "./styles"
import { UnitsToggleProps } from "./types"

export enum UNITS {
  CELSIUS,
  FAHRENHEIT,
}

export const UnitsToggle = ({ setUnit }: UnitsToggleProps) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((checked) => !checked)
    setUnit(e.target.checked ? UNITS.FAHRENHEIT : UNITS.CELSIUS)
  }

  return (
    <S.StyledUnitsToggle>
      <S.UnitLabel>ºC</S.UnitLabel>
      <Switch checked={checked} onChange={handleChange} />
      <S.UnitLabel>ºF</S.UnitLabel>
    </S.StyledUnitsToggle>
  )
}
