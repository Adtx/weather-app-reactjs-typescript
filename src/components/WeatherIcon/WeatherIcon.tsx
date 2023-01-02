import styled from "styled-components"

const StyledWeatherIcon = styled.div`
  display: inline-block;
  height: 75px;
  margin-top: 8%;
  position: relative;
  width: 75px;

  &:hover span {
    visibility: visible;
  }
`

const Icon = styled.img`
  height: 100%;
  width: 100%;
`

const Tooltip = styled.span`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  padding: 5px 0;
  text-align: center;
  visibility: hidden;
  width: 120px;

  /* Position the tooltip */
  left: 95%;
  position: absolute;
  top: 6px;
  z-index: 1;
`

interface WeatherIconProps {
  icon: { icon: string; description: string }
}

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
