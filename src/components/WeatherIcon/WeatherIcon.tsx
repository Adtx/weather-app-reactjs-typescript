import * as S from "./styles"
import { WeatherIconProps } from "./types"

export const WeatherIcon = ({
  icon: { icon, description },
}: WeatherIconProps) => {
  const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <S.StyledWeatherIcon>
      <S.Icon src={ICON_URL} alt="Weather icon" />
      <S.Tooltip>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </S.Tooltip>
    </S.StyledWeatherIcon>
  )
}
