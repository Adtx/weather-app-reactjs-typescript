import { useEffect, useState } from "react"
import { fetchWeatherInfo } from "./apiUtils"
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay"

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
    <div style={{ margin: "15px auto", width: "30%", textAlign: "center" }}>
      <TemperatureDisplay temperature={temperature} unit={unit} />
    </div>
  )
}
