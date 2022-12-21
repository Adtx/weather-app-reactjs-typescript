import React from "react"
import { StyledTemperatureDisplay } from "./styles"
import { TemperatureDisplayProps } from "./types"
import { UNITS } from "../UnitsToggle/UnitsToggle"

const TemperatureDisplay = ({ temperature, unit }: TemperatureDisplayProps) => {
  return (
    <StyledTemperatureDisplay>
      {temperature.toFixed(1) + " " + (unit === UNITS.CELSIUS ? "ºC" : "ºF")}
    </StyledTemperatureDisplay>
  )
}

export default React.memo(
  TemperatureDisplay,
  (oldProps, newProps) => oldProps.temperature === newProps.temperature
)
