import { StyledTemperatureDisplay } from "./styles"
import { TemperatureDisplayProps } from "./types"

enum UNITS {
  CELSIUS,
  FAHRENHEIT,
}

export const TemperatureDisplay = ({
  temperature,
  unit,
}: TemperatureDisplayProps) => {
  return (
    <StyledTemperatureDisplay>
      {temperature.toFixed(1) + " " + (unit === UNITS.CELSIUS ? "ºC" : "ºF")}
    </StyledTemperatureDisplay>
  )
}
