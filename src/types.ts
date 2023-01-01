export type displayDataType = {
  location: string
  temperature: string | null
  weatherIcon: {
    icon: string
    description: string
  }
  daylightTimes: {
    sunrise: number
    sunset: number
  }
}

export interface WeatherInfo {
  weather: Weather[]
  main: MainInfo
  dt: number
  sys: Sys
}

interface Sys {
  sunrise: number
  sunset: number
}

interface MainInfo {
  temp: number
}

interface Weather {
  description: string
  icon: string
}
