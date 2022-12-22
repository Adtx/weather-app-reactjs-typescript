import { useEffect, useState, useRef } from "react"
import { fetchWeatherInfo } from "./apiUtils"
import { LocationPicker } from "./components/LocationPicker/LocationPicker"
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay"
import { UnitsToggle } from "./components/UnitsToggle/UnitsToggle"
import { WeatherIcon } from "./components/WeatherIcon/WeatherIcon"
import { DaylightClock } from "./DaylightClock/DaylightClock"
import { InputArea, StyledHeader, StyledWeatherApp, Title } from "./styles"

export const WeatherApp = () => {
  const [temperature, setTemperature] = useState(234)
  const [unit, setUnit] = useState(0)
  const [location, setLocation] = useState("Lisbon")
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null)
  const [daylightTimes, setDaylightTimes] = useState({ sunrise: 0, sunset: 0 })

  useEffect(() => {
    fetchWeatherInfo(location, unit).then((weatherInfo) => {
      const { temp, icon, sunrise, sunset } = weatherInfo!
      setTemperature(temp)
      setWeatherIcon(icon)
      setDaylightTimes({ sunrise, sunset })
    })
  }, [location, unit])

  return (
    <StyledWeatherApp>
      <StyledHeader>
        <Title>Weather app</Title>
      </StyledHeader>
      <InputArea>
        <LocationPicker setLocation={setLocation} />
        <UnitsToggle setUnit={setUnit} />
      </InputArea>
      <TemperatureDisplay temperature={temperature} unit={unit} />
      <WeatherIcon icon={weatherIcon!} />
      <DaylightClock daylightTimes={daylightTimes} />
    </StyledWeatherApp>
  )
}
