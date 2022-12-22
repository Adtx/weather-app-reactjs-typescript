import { StyledTemperatureDisplay } from "./styles"
import { TemperatureDisplayProps } from "./types"

export const TemperatureDisplay = ({
  temperature,
}: TemperatureDisplayProps) => {
  return <StyledTemperatureDisplay>{temperature}</StyledTemperatureDisplay>
}
