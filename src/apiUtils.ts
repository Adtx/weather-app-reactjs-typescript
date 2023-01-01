import { WeatherInfo } from "./types"

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const UNIT_SYSTEM = ["metric", "imperial"]

class HttpRequestError extends Error {}

// Return true if results are older than 30 minutes
const apiResultsOutOfDate = (timestamp: number | null) => {
  const now = Math.floor(new Date().getTime() / 1000)
  return timestamp && now - timestamp > 1800
}

export const getAPIResultsFromSessionStorage = (
  location: string
): WeatherInfo | null => {
  const apiResults = JSON.parse(
    sessionStorage.getItem(location) || "null"
  ) as WeatherInfo
  return apiResults && !apiResultsOutOfDate(apiResults.dt) ? apiResults : null
}

export const saveAPIResultsToSessionStorage = (
  location: string,
  apiResults: WeatherInfo
) => {
  sessionStorage.setItem(location, JSON.stringify(apiResults))
}

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
    let apiResults = getAPIResultsFromSessionStorage(location)
    if (apiResults === null) {
      const res = await fetch(`${WEATHER_API_BASE_URL}?${apiQueryString}`)
      if (!res.ok)
        throw new HttpRequestError(
          `API request to api.openweathermap.org failed with HTTP status: ${res.status} ${res.statusText}`
        )
      apiResults = (await res.json()) as WeatherInfo
      saveAPIResultsToSessionStorage(location, apiResults)
    }
    const {
      weather: [{ description, icon }],
      main: { temp },
      sys: { sunrise, sunset },
    } = apiResults
    return { temp, description, icon, sunrise, sunset }
  } catch (error) {
    console.error(error)
    if (error instanceof HttpRequestError) throw error
  }
}
