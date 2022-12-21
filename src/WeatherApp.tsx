import { useEffect, useState } from "react"
import { fetchWeatherInfo } from "./apiUtils"
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay"
import { StyledHeader, StyledWeatherApp, Title } from "./styles"

export const WeatherApp = () => {
  const [temperature, setTemperature] = useState(234)
  const [unit, setUnit] = useState(0)

  useEffect(() => {
    fetchWeatherInfo().then((weatherInfo) => {
      const { temp, sunrise, sunset } = weatherInfo!
      setTemperature(temp)
    })
  }, [])

  return (
    <StyledWeatherApp>
      <StyledHeader>
        <Title>Weather app</Title>
      </StyledHeader>
      <TemperatureDisplay temperature={temperature} unit={unit} />
    </StyledWeatherApp>
  )
}
