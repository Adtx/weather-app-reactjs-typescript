import { useEffect, useState } from "react"
import { fetchWeatherInfo } from "./apiUtils"

export const WeatherApp = () => {
  const [temperature, setTemperature] = useState(234)
  const [unit, setUnit] = useState("celsius")

  useEffect(() => {
    fetchWeatherInfo().then((weatherInfo) => {
      const { temp, sunrise, sunset } = weatherInfo!
      setTemperature(temp)
    })
  }, [])

  return (
    <div style={{ margin: "15px auto", width: "30%", textAlign: "center" }}>
      <h2>{temperature + " " + (unit === "celsius" ? "ºC" : "ºF")}</h2>
    </div>
  )
}
