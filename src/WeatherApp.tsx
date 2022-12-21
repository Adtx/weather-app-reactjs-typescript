import { useEffect, useState } from "react"
import { fetchWeatherInfo } from "./apiUtils"
import { LocationPicker } from "./components/LocationPicker/LocationPicker"
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay"
import { InputArea, StyledHeader, StyledWeatherApp, Title } from "./styles"

export const WeatherApp = () => {
  const [temperature, setTemperature] = useState(234)
  const [unit, setUnit] = useState(0)
  const [location, setLocation] = useState("Lisbon")

  useEffect(() => {
    fetchWeatherInfo(location).then((weatherInfo) => {
      const { temp, sunrise, sunset } = weatherInfo!
      setTemperature(temp)
    })
  }, [location])

  return (
    <StyledWeatherApp>
      <StyledHeader>
        <Title>Weather app</Title>
      </StyledHeader>
      <InputArea>
        <LocationPicker setLocation={setLocation} />
      </InputArea>
      <TemperatureDisplay temperature={temperature} unit={unit} />
    </StyledWeatherApp>
  )
}
