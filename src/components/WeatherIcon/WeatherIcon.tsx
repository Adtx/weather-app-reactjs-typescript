import { StyledWeatherIcon } from "./styles"
import { WeatherIconProps } from "./types"

export const WeatherIcon = ({ icon }: WeatherIconProps) => {
  const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return <StyledWeatherIcon src={ICON_URL} alt="Weather icon" />
}
