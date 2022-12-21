import { Switch } from "@mui/material"
import { useState } from "react"
import { StyledUnitsToggle, UnitLabel } from "./styles"
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
    <StyledUnitsToggle>
      <UnitLabel>ºC</UnitLabel>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <UnitLabel>ºF</UnitLabel>
    </StyledUnitsToggle>
  )
}
