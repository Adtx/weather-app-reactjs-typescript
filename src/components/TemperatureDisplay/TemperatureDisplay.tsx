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
      {temperature + " " + (unit === UNITS.CELSIUS ? "ºC" : "ºF")}
    </StyledTemperatureDisplay>
  )
}
