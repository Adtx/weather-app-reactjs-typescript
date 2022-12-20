import { WeatherInfo } from "./types"

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export const fetchWeatherInfo = async (
  location: string = "lisbon",
  units: string = "metric"
) => {
  const urlParams = {
    q: location,
    appid: process.env.REACT_APP_WEATHER_API_KEY!,
    units,
  }

  const apiQueryString = new URLSearchParams(urlParams).toString()

  try {
    const res = await fetch(`${WEATHER_API_BASE_URL}?${apiQueryString}`)
    const {
      main: { temp },
      sys: { sunrise, sunset },
    } = (await res.json()) as WeatherInfo
    return { temp, sunrise, sunset }
  } catch (error) {
    console.error(error)
  }
}
