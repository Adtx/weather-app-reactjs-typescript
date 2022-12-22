import { WeatherInfo } from "./types"

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const UNIT_SYSTEM = ["metric", "imperial"]

export const fetchWeatherInfo = async (
  location: string = "lisbon",
  units: number = 0
) => {
  const urlParams = {
    q: location,
    appid: process.env.REACT_APP_WEATHER_API_KEY!,
    units: UNIT_SYSTEM[units],
  }

  const apiQueryString = new URLSearchParams(urlParams).toString()

  try {
    const res = await fetch(`${WEATHER_API_BASE_URL}?${apiQueryString}`)
    const {
      weather: [{ icon }],
      main: { temp },
      sys: { sunrise, sunset },
    } = (await res.json()) as WeatherInfo
    return { temp, icon, sunrise, sunset }
  } catch (error) {
    console.error(error)
  }
}
