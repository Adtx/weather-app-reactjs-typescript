import { Icon, StyledWeatherIcon, Tooltip } from "./styles"
import { WeatherIconProps } from "./types"

export const WeatherIcon = ({
  icon: { icon, description },
}: WeatherIconProps) => {
  const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <StyledWeatherIcon>
      <Icon src={ICON_URL} alt="Weather icon" />
      <Tooltip>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </Tooltip>
    </StyledWeatherIcon>
  )
}
